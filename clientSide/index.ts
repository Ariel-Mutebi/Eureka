// @deno-types="npm:@types/leaflet"
import * as L from "npm:leaflet";
import Fuse from "npm:fuse.js";
import { incrementIndex, decrementIndex, setIndex, setMaxIndex, store } from "./indexStateManagement.ts";
import type { FuseResult } from "npm:fuse.js";

const map = L.map("map");
const popups: L.Marker[] = [];

function addPopup(coordinates: L.LatLngExpression, HTMLstring: string){
  popups.push(L.marker(coordinates).addTo(map).bindPopup(HTMLstring));
}

function openPopup() {
  popups[store.getState().index].openPopup();
}

function setUpMap(coordinates: number[][]) {
  const focusMap = () => {
    const { index } = store.getState();
    map.setView([coordinates[index][0] + 0.002, coordinates[index][1]], 15);
  };

  store.subscribe(focusMap);
  store.dispatch(setMaxIndex(coordinates.length - 1)); // also causes focusMap to be called, making an explicit initial call redundant.
  store.subscribe(openPopup); // Placed here to prevent a premature initial call.

  // tile layer
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // map navigation
  document.getElementById("previousPin")?.addEventListener("click", () => {
    store.dispatch(decrementIndex());
  });

  document.getElementById("nextPin")?.addEventListener("click", () => {
    store.dispatch(incrementIndex());
  });
}

interface SearchBarItem{
  name: string;
  state: string; // as in lost or found
  description: string;
  fullLocationName: string;
}

function setUpSearchBar(items: SearchBarItem[]) {
  let searchPattern = "";
  let searchResults: FuseResult<SearchBarItem>[] = [];
  const fuse = new Fuse(items, { keys: ["name", "state", "description", "fullLocationName"] });
  
  const searchBar = document.getElementById("searchBar") as HTMLFormElement;
  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  const searchSuggestionContainer = document.getElementById("searchSuggestions") as HTMLDivElement;

  const renderSearchSuggestion = (suggestion: string) => {
    const p = document.createElement("p");
    p.innerText = suggestion;
    p.classList.add("m-0", "p-1", "bg-body-secondary", "border", "border-dark-subtle", "w-100", "text-truncate", "cursor-pointer");
    p.addEventListener("click", () => { searchInput.value = p.innerText });
    searchSuggestionContainer.appendChild(p);
  };

  searchInput.addEventListener("keyup", () => {
    searchPattern = searchInput.value;
    searchResults = fuse.search(searchPattern);
    searchSuggestionContainer.innerHTML = "";

    if(searchResults.length > 0) {
      const searchSuggestions = searchResults.map(
        (result) => `${result.item.name} ${result.item.state} at ${result.item.fullLocationName}`);

      let searchSuggestionCount = 0;
      const maximumSearchSuggestions = 3;

      while(searchSuggestionCount < Math.min(searchSuggestions.length, maximumSearchSuggestions)) {
        renderSearchSuggestion(searchSuggestions[searchSuggestionCount++]);
      }
    } else {
      renderSearchSuggestion("No results.");
    }
  });

  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(searchBar);
    searchPattern = data.get("searchPattern") as string;
    searchResults = fuse.search(searchPattern);

    if(searchResults.length > 0) {
      store.dispatch(setIndex(searchResults[0].refIndex));
    }
  });
}

export { addPopup, openPopup, setUpMap, setUpSearchBar };