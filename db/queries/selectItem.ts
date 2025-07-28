import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import ItemInDatabase from "../../interfaces/ItemInDatabase.ts";
import pool from "../pool.ts";

async function selectItem(itemPrimaryKey: string) {
  const response = await pool.query("SELECT * FROM items WHERE pk=$1;", [itemPrimaryKey]);
  return recaseKeys((response.rows)[0]) as ItemInDatabase;
};

export default selectItem;