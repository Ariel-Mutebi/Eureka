import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import Item from "../../interfaces/Item.ts";
import pool from "../pool.ts";

async function selectItem(itemPrimaryKey: string) {
  const response = await pool.query("SELECT * FROM items WHERE pk=$1;", [itemPrimaryKey]);
  return recaseKeys((response.rows)[0]) as Item;
};

export default selectItem;