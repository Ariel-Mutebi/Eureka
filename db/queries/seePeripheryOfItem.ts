import recaseKeys from "../../helperFunctions/recaseKeys.ts";
import ItemPeriphery from "../../interfaces/ItemPeriphery.ts";
import pool from "../pool.ts";

async function seePeripheryOfItem(itemPrimaryKey: string) {
  const parameterizedQuery = (
    `WITH pk_to_peripheral_pks_mapping AS (
        SELECT
            pk,
            LAG(pk) OVER (ORDER BY pk)  AS previous_primary_key,
            LEAD(pk) OVER (ORDER BY pk) AS next_primary_key
        FROM items
    )
    SELECT previous_primary_key, next_primary_key
    FROM pk_to_peripheral_pks_mapping
    WHERE pk = $1;`
  );

  const response = await pool.query(parameterizedQuery, [itemPrimaryKey]);
  return recaseKeys(response.rows[0]) as ItemPeriphery;
};

export default seePeripheryOfItem;