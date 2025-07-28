import { body } from "npm:express-validator";

const minMaxOptions = { min: 1, max: 255 };
const lengthError = "must be between 1 and 255 characters.";

const validateItem = [
  body("name")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Name of item " + lengthError),
  body("description")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Description of items " + lengthError),
  body("emailOfPersonWhoPosted")
    .isEmail()
    .withMessage("Invalid email."),
  body("password")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Password " + lengthError),
  body("isLost")
    .custom(string => string === "TRUE" || string === "FALSE")
    .withMessage("Value for 'isLost' must either be 'TRUE' or 'FALSE'."),
  body("locationName")
    .trim()
    .isLength({ min: 1 }) // no max of 255 as not stored in database.
    .withMessage("Please give a location.")
];

export default validateItem;