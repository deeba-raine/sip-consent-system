const express = require("express");

const router = express.Router();

const saveConsent = require("../controllers/consentController");
const getConsents = require("../controllers/getConsentsController");
const consentValidator = require("../validators/consentValidator");


router.post(
    "/consent",
    consentValidator,
    saveConsent
);

router.get("/consent", getConsents);


module.exports = router;