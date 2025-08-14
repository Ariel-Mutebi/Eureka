import pool from "../pool.ts";
import recaseKeys from "../../helperFunctions/recaseKeys.ts";

async function selectEmailOfPerson(itemPrimaryKey: string){
  const response = recaseKeys(
    await pool.query("SELECT email_of_person_who_posted FROM items where pk=$1", [itemPrimaryKey])
  );
  return response.rows[0].emailOfPersonWhoPosted as string;
}

export default selectEmailOfPerson;