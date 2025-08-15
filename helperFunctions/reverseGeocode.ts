import jeParleAnglais from "../constants/jeParleAnglais.ts";
import geocodesToLocationNameObjects from "../objects/geocodesToLocationNameObjects.ts";
import recaseKeys from "./recaseKeys.ts";

async function reverseGeocode(lat: number, lon: number) {
  const geocodeString = JSON.stringify([lat, lon]);
  const cachedLocationName = geocodesToLocationNameObjects[geocodeString];

  if(cachedLocationName) {
    return cachedLocationName;
  }

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, jeParleAnglais);
    const location = recaseKeys(await response.json());
    const locationName: string = location.name;
    const fullLocationName: string = location.displayName;
    const locationNameObject = { locationName, fullLocationName };
    geocodesToLocationNameObjects[geocodeString] = locationNameObject;
    await new Promise(resolve => setTimeout(resolve, 1000)); // Nominatim API rate limit is 1 request/second
    return locationNameObject;
  } catch (error) {
    console.error(error);
    return { locationName: undefined, fullLocationName: undefined };
  };
};

export default reverseGeocode;