import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import Item from "../../interfaces/Item.ts";
import pool from "../pool.ts";

async function selectAnyOldItem() {
  const response = await pool.query("SELECT * FROM items LIMIT 1;");
  return recaseKeys((response.rows)[0]) as Item;
}

export default selectAnyOldItem;