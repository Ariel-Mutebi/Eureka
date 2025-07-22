// @ts-types='npm:@types/express';
import type { Response } from "express";
import selectAll from "../db/queries/selectAll.ts";
import reverseGeocode from "../littleFunctions/reverseGeocode.ts";

async function renderIndex(_req: object, res: Response) {
  const itemsAsFromDatabase = await selectAll();
  
  const itemsWithLocationNames = await Promise.all(
    itemsAsFromDatabase.map(async(item) =>{
      item.locationName = await reverseGeocode(item.location.x, item.location.y);
      return item;
    })
  );
  
  res.render("index", { items: itemsWithLocationNames });
};

export default renderIndex;