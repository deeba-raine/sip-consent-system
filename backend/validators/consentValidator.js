const { body } = require("express-validator");

const consentValidator = [

    body("studentInformation.firstName")
        .trim()
        .notEmpty()
        .withMessage("Student first name is required"),

    body("studentInformation.lastName")
        .trim()
        .notEmpty()
        .withMessage("Student last name is required"),

];

module.exports = consentValidator;