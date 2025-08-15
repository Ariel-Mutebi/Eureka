import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import Item from "../../interfaces/Item.ts";
import pool from "../pool.ts";

async function selectFirstItem() {
  const response = await pool.query("SELECT * FROM items ORDER BY pk LIMIT 1;");
  return recaseKeys((response.rows)[0]) as Item;
}

export default selectFirstItem;