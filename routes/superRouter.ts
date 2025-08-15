import { Router } from "npm:express";
import renderError from "../handlers/renderError.ts";
import updatePostRouter from "./updatePostRouter.ts";
import createPostRouter from "./createPostRouter.ts";
import deletePostRouter from "./deletePostRouter.ts";
import contactRouter from "./contactRouter.ts";
import render404 from "../handlers/render404.ts";
import indexRouter from "./indexRouter.ts";

const superRouter = Router();

superRouter.use("/", indexRouter);
superRouter.use("/createPost", createPostRouter);
superRouter.use("/updatePost", updatePostRouter);
superRouter.use("/deletePost", deletePostRouter);
superRouter.use("/contact", contactRouter);
superRouter.use(render404);
superRouter.use(renderError);

export default superRouter;