import { Router } from "npm:express";
import expressAsyncHandler from "npm:express-async-handler";
import renderContact from "../handlers/renderContact.ts";
import contactPerson from "../handlers/contactPerson.ts";
import validateMessage from "../handlers/validateMessage.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";

const contactRouter = Router();

contactRouter.get("/:itemPrimaryKey", expressAsyncHandler(renderContact));
contactRouter.post("/:itemPrimaryKey", validateMessage, handleValidationErrors("contact"), expressAsyncHandler(contactPerson));

export default contactRouter;