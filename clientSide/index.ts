// @deno-types="npm:@types/leaflet"
import * as L from "npm:leaflet";
import * as ejs from "npm:ejs/ejs.min.js";
import Item from "../interfaces/Item.ts";
import itemTemplate from "../views/partials/item.ejs" with { type: "text" };

function setUpMap(item: Item) {
  console.log(item);
  const map = L.map("map");
  
  // focus map
  map.setView([item.location.x + 0.002, item.location.y], 15);

  // tile layer
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // popup
  const itemHTML = ejs.render(itemTemplate, { item });

  const popup = L.popup({
    closeOnClick: false 
  }).setContent(itemHTML);

  L.marker([item.location.x, item.location.y])
    .addTo(map)
    .bindPopup(popup)
    .openPopup();

  // map navigation
  document.getElementById("previousPin")?.addEventListener("click", () => {
  });

  document.getElementById("nextPin")?.addEventListener("click", () => {
  });
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