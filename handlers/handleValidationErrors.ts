import type { RequestHandler } from "npm:express";
import { validationResult } from "express-validator";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNameToItem.ts";

const handleValidationErrors: RequestHandler = async(req, res, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) next();

  try {
    const itemsAsFromDatabase = await selectAllItems();
    const itemsWithLocationNames = await addLocationNamesToItems(itemsAsFromDatabase);
    res.status(400).render("index", { items: itemsWithLocationNames, previous: req.body, errors: errors.array() });
  } catch (error) {
    next(error);
  }
};

export default handleValidationErrors;