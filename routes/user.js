const controller = require("../controller/user.js");
const express = require("express");
const router = express.Router();

router.post("/add", controller.postuser);
router.get("/email", controller.findbyemail)