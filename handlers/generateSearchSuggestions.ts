import Fuse from "npm:fuse.js";
import type { Request, Response } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNamesToItems.ts";

const generateSearchSuggestions = async(req: Request, res: Response) => {
  const searchPattern = req.query.searchPattern as string;
  const items = await addLocationNamesToItems(await selectAllItems());
  const fuse = new Fuse(items, { keys: ["name", "description", "fullLocationName"] });

  const searchResults = fuse.search(searchPattern);
  const searchSuggestions = searchResults.map((result) => 
    `${result.item.name} ${result.item.isLost ? "lost" : "found"}${result.item.fullLocationName ? " at " +  result.item.fullLocationName : ""}`
  );

  res.json(searchSuggestions);  
};

export default generateSearchSuggestions;