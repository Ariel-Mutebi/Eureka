import type { Response } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNamesToItems.ts";

const renderIndex = async(_req: object, res: Response) => {
  const items = await addLocationNamesToItems(await selectAllItems());
  res.render("index", { items });
};

export default renderIndex;