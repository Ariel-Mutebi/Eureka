import { body } from "express-validator";

const minOption = { min: 1 };

const validateMessage = [
  body("subject")
    .trim()
    .isLength(minOption)
    .withMessage("Please write a subject."),
  body("message")
    .trim()
    .isLength(minOption)
    .withMessage("Please write a message.")
]

export default validateMessage;