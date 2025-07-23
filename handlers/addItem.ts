import type { RequestHandler } from "npm:express";
import ItemInClient from "../interfaces/ItemInClient.ts";
import geocode from "../helperFunctions/geocode.ts";
import insertItem from "../db/queries/insertItem.ts";

const addItem: RequestHandler = async(req, res, next) => {
  try {
    const item = req.body as ItemInClient;
    item.location = await geocode(item.locationName);
    await insertItem(item);
    res.redirect("/"); 
  } catch (error) {
    next(error);
  }
};

export default addItem;