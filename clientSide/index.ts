// deno-lint-ignore-file no-window
// @deno-types="npm:@types/leaflet"
import * as L from "npm:leaflet";
import * as ejs from "npm:ejs/ejs.min.js";
import Item from "../interfaces/Item.ts";
import itemTemplate from "../views/partials/item.ejs" with { type: "text" };

function setUpMap(currentItem: Item) {
  const map = L.map("map");
  
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);


  const previousPin = document.getElementById("previousPin") as HTMLButtonElement;
  const nextPin = document.getElementById("nextPin") as HTMLButtonElement;
  let previousPinEventListener = () => {};
  let nextPinEventListener = () => {};

  const seeAtSpecificItem = (item: Item) => {
    map.setView([item.location.x + 0.002, item.location.y], 15);
    
    const itemHTML = ejs.render(itemTemplate, { item });
    const popup = L.popup({closeOnClick: false }).setContent(itemHTML);

    L.marker([item.location.x, item.location.y])
      .addTo(map)
      .bindPopup(popup)
      .openPopup();

    previousPin.disabled = !item.periphery?.previousPrimaryKey;
    nextPin.disabled = !item.periphery?.nextPrimaryKey;

    previousPin.removeEventListener("click", previousPinEventListener);
    nextPin.removeEventListener("click", nextPinEventListener);

    previousPinEventListener = async() => {
      if(item.periphery?.previousPrimaryKey) {
        const { previousPrimaryKey } = item.periphery;
        history.pushState({}, "", `/${previousPrimaryKey}`);
        const response = await fetch(`${window.location.protocol}/${previousPrimaryKey}/json`);
        const previousItem = await response.json();
        seeAtSpecificItem(previousItem);
      }
    };

    nextPinEventListener = async() => {
      if(item.periphery?.nextPrimaryKey) {
        const { nextPrimaryKey } = item.periphery;
        history.pushState({}, "", `/${nextPrimaryKey}`);
        const response = await fetch(`${window.location.protocol}/${nextPrimaryKey}/json`);
        const nextItem = await response.json();
        seeAtSpecificItem(nextItem);
      }
    };

    previousPin.addEventListener("click", previousPinEventListener);
    nextPin.addEventListener("click", nextPinEventListener);
  }

  seeAtSpecificItem(currentItem);
}

function setUpSearchBar() {
  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  const searchSuggestionContainer = document.getElementById("searchSuggestions") as HTMLDivElement;

  const renderSearchSuggestion = (suggestion: string) => {
    const p = document.createElement("p");
    p.innerText = suggestion;
    p.classList.add("m-0", "p-1", "bg-body-secondary", "border", "border-dark-subtle", "w-100", "text-truncate", "cursor-pointer");
    p.addEventListener("click", () => { searchInput.value = p.innerText });
    searchSuggestionContainer.appendChild(p);
  };

  let debounceTimeout: number | undefined;
  let lastFetchId = 0;
  const debounceDelayInMS = 300;

  searchInput.addEventListener("keyup", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(async () => {
      const searchPattern = searchInput.value;
      searchSuggestionContainer.innerHTML = "";

      const fetchId = ++lastFetchId;

      try {
        const response = await fetch(`/searchSuggestions?searchPattern=${encodeURIComponent(searchPattern)}`);
        if (!response.ok) throw new Error("Request failed");

        const searchSuggestions: string[] = await response.json();

        if (fetchId !== lastFetchId) return;

        if (searchSuggestions.length > 0) {
          const maximumSearchSuggestions = 3;
          for (let i = 0; i < Math.min(searchSuggestions.length, maximumSearchSuggestions); i++) {
            renderSearchSuggestion(searchSuggestions[i]);
          }
        } else {
          renderSearchSuggestion("No results.");
        }
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      }
    }, debounceDelayInMS);
  });
}

export { setUpMap, setUpSearchBar };