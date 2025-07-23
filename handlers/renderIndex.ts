import type { RequestHandler } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import reverseGeocode from "../helperFunctions/reverseGeocode.ts";

const renderIndex: RequestHandler = async(__req, res, next) => {
  try {
    const itemsAsFromDatabase = await selectAllItems();

    const itemsWithLocationNames = await Promise.all(
      itemsAsFromDatabase.map(async(item) =>{
        item.locationName = await reverseGeocode(item.location.x, item.location.y);
        return item;
      })
    );
    
    res.render("index", { items: itemsWithLocationNames });
  } catch (error) {
    next(error);    
  }
};

export default renderIndex;