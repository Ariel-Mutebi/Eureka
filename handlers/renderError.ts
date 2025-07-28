import type { ErrorRequestHandler } from "npm:express";

const renderError: ErrorRequestHandler = (error, __req, res, __next) => {
  console.error(error);
  const statusCode = error.statusCode || 500;
  res.status(statusCode);
  res.render("error", { statusCode, error });
};

export default renderError;