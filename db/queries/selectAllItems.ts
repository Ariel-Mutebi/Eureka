import pool from "../pool.ts";
import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import Item from "../../interfaces/Item.ts";

async function selectAllItems() {
  const response = await pool.query("SELECT * from items;");
  return response.rows.map(recaseKeys) as Item[];
}

export default selectAllItems;