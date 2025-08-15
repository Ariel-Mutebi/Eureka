import Item from "../interfaces/Item.ts";
import addLocationNameToItem from "./addLocationNameToItem.ts";

function addLocationNamesToItems(itemsAsFromDatabase: Item[]) {
  return Promise.all(itemsAsFromDatabase.map(addLocationNameToItem));
}

export default addLocationNamesToItems;