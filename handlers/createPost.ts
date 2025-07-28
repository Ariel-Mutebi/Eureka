import type { Request, Response } from "npm:express";
import insertItem from "../db/queries/insertItem.ts";
import addLocationToItem from "../helperFunctions/addLocationToItem.ts";

const createPost = async(req: Request, res: Response) => {
    const item = await addLocationToItem(req.body);
    await insertItem(item);
    res.redirect("/");
};

export default createPost;