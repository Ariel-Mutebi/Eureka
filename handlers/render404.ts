import type { Response } from "npm:express";

const render404 = (_req: object, res: Response) => {
  const statusCode = 404;
  const error = "Sorry, the page you are looking for cannot be found.";
  res.status(statusCode);
  res.render("error", { statusCode, error })
};

export default render404;