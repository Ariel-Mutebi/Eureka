import jeParleAnglais from "../constants/jeParleAnglais.ts";
import recaseKeys from "./recaseKeys.ts";

async function reverseGeocode(lat: number, lon: number) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, jeParleAnglais);
    const location = recaseKeys(await response.json());
    const locationName: string = location.name;
    const fullLocationName: string = location.displayName;
    return { locationName, fullLocationName };
  } catch (error) {
    console.error(error);
    return { locationName: undefined, fullLocationName: undefined };
  };
};

export default reverseGeocode;