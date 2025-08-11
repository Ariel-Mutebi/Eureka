// @deno-types="npm:@types/leaflet"
import * as L from "npm:leaflet";
import { incrementIndex, decrementIndex, setMaxIndex, store } from "./indexStateManagement.ts";

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

function setUpSearchBar(items: string[]) {
  console.log(items);
}

export { addPopup, openPopup, setUpMap, setUpSearchBar };