import ItemInDatabase from "../interfaces/ItemInDatabase.ts";
import reverseGeocode from "./reverseGeocode.ts";

async function addLocationNameToItem(item: ItemInDatabase) {
  return Object.assign({}, item, await reverseGeocode(item.location.x, item.location.y));
};

export default addLocationNameToItem;