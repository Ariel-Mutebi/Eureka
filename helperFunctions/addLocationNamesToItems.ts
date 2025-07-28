import ItemInDatabase from "../interfaces/ItemInDatabase.ts";
import addLocationNameToItem from "./addLocationNameToItem.ts";

function addLocationNamesToItems(itemsAsFromDatabase: ItemInDatabase[]) {
  return Promise.all(itemsAsFromDatabase.map(addLocationNameToItem));
}

export default addLocationNamesToItems;