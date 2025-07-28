import { RequestHandler } from "npm:express";

const renderCreatePost: RequestHandler = (_req, res) => {
  res.render("createPost");
};

export default renderCreatePost;