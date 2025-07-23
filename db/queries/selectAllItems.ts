import ItemInDatabase from "../../interfaces/ItemInDatabase.ts";
import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import pool from "../pool.ts";

async function selectAllItems() {
  const response = await pool.query("SELECT * from items;");
  return response.rows.map(recaseKeys) as ItemInDatabase[];
}

export default selectAllItems;