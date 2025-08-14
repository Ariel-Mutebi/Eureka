import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import renderError from "../handlers/renderError.ts";
import expressAsyncHandler from "npm:express-async-handler";
import updatePostRouter from "./updatePostRouter.ts";
import createPostRouter from "./createPostRouter.ts";
import deletePostRouter from "./deletePostRouter.ts";
import contactRouter from "./contactRouter.ts";
import render404 from "../handlers/render404.ts";

const indexRouter = Router();

indexRouter.get("/", expressAsyncHandler(renderIndex));
indexRouter.use("/createPost", createPostRouter);
indexRouter.use("/updatePost", updatePostRouter);
indexRouter.use("/deletePost", deletePostRouter);
indexRouter.use("/contact", contactRouter);
indexRouter.use(render404);
indexRouter.use(renderError);

export default indexRouter;