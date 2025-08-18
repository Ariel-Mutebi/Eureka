import { Router } from "npm:express";
import expressAsyncHandler from "express-async-handler";
import renderIndex from "../handlers/renderIndex.ts";
import generateSearchSuggestions from "../handlers/generateSearchSuggestions.ts";
import getItemJson from "../handlers/getItemJSON.ts";

const indexRouter = Router();

indexRouter.get("/searchSuggestions", expressAsyncHandler(generateSearchSuggestions));
indexRouter.get("/:itemPrimaryKey?", expressAsyncHandler(renderIndex));
indexRouter.get("/:itemPrimaryKey/json", expressAsyncHandler(getItemJson));

export default indexRouter;