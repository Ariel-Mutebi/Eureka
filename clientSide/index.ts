// @deno-types="npm:@types/leaflet"
import * as L from "npm:leaflet";

let index = 0;
const map = L.map("map");
// see ../views/partials/indexScripts.ejs for how pop-ups are added.
const popups: L.Marker[] = [];
const openPopup = () => popups[index].openPopup();

function setUpMap(coordinates: number[][]) {
  const focusMap = () => {
    map.setView([coordinates[index][0], coordinates[index][1]], 15);
  };

  focusMap();

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const setUpNavigation = () => {
    const previousPinButton = document.getElementById("previousPin");
    const nextPinButton = document.getElementById("nextPin");

    previousPinButton?.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      focusMap();
      openPopup();
    });

    nextPinButton?.addEventListener("click", () => {
      index = Math.min(coordinates.length - 1, index + 1);
      focusMap();
      openPopup();
    });
  };

  setUpNavigation();
};

export { map, popups, openPopup, setUpMap };