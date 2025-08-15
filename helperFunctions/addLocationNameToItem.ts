import Item from "../interfaces/Item.ts";
import reverseGeocode from "./reverseGeocode.ts";

async function addLocationNameToItem(item: Item) {
  return Object.assign(item, await reverseGeocode(item.location.x, item.location.y)) as Item;
};

export default addLocationNameToItem;