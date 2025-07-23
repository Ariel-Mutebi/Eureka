import type { RequestHandler } from "npm:express";
import { validationResult } from "express-validator";

const handleValidationErrors: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) next();

  const queryParameters = errors.array().map((errorObject, index) => {
    const encodedErrorMessage = encodeURIComponent(errorObject.msg);
    let queryParameter = `errors=${encodedErrorMessage}`;
    if(index > 0) queryParameter = `&${queryParameter}`;
    return queryParameter;
  }).join("");

  res.redirect(`/?${queryParameters}`);
};

export default handleValidationErrors;