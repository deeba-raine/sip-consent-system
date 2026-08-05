const express = require("express");

const router = express.Router();

const saveConsent = require("../controllers/consentController");


router.post("/consent", saveConsent);


module.exports = router;