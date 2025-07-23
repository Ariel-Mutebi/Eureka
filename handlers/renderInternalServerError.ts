import type { ErrorRequestHandler } from "npm:express";

const renderInternalServerError: ErrorRequestHandler = (error, __req, res, __next) => {
  console.error(error);
  res.status(500);
  res.render("internalServerError", { error });
};

export default renderInternalServerError;