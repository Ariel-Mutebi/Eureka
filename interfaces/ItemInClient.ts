import ItemInDatabase from "./ItemInDatabase.ts";

interface ItemInClient extends ItemInDatabase {
  locationName: string;
};

export default ItemInClient;