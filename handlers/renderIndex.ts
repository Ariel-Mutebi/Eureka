import type { RequestHandler } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNameToItem.ts";

const renderIndex: RequestHandler = async(req, res, next) => {
  try {
    const itemsAsFromDatabase = await selectAllItems();
    const itemsWithLocationNames = await addLocationNamesToItems(itemsAsFromDatabase);
    if(!Array.isArray(req.query.errors)) {
      res.render("index", { items: itemsWithLocationNames });
    } else {
      res.render("index", { items: itemsWithLocationNames, errors: req.query.errors });
    }
  } catch (error) {
    next(error);
  }
};

export default renderIndex;