const controller = require("../controller/notes");
const express = require("express");
const router = express.Router();
router.post("/add", controller.postADD_Note);
router.put("/upd", controller.postUPD_Note);
router.get("/userNotes", controller.getUserNotes);
router.get("/archivied", controller.getArchiviedNotes);
router.get("/active", controller.getActiveNotes);