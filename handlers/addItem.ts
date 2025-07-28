import ItemInClient from "../interfaces/ItemInClient.ts";
import geocode from "../helperFunctions/geocode.ts";
import insertItem from "../db/queries/insertItem.ts";
import type { Request, Response } from "npm:express";

// Can't use RequestHandler type because will be wrapped in asyncHandler,
// which needs to know that the handler returns a promise.
const addItem = async(req: Request, res: Response) => {
    const item = req.body as ItemInClient;
    item.location = await geocode(item.locationName);
    await insertItem(item);
    res.redirect("/");
};

export default addItem;