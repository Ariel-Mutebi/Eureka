import type { RequestHandler } from "npm:express";
import { validationResult } from "express-validator";

const handleValidationErrors: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) next();
  res.render("createPost", { errors: errors.array(), previous: req.body });
};

export default handleValidationErrors;