const express = require("express");

const { ProjectController } = require("./controllers");

const router = express.Router();

router.get("/Project", ProjectController.browse);
router.get("/Project/:id", ProjectController.read);
router.put("/Project/:id", ProjectController.edit);
router.post("/Project", ProjectController.add);
router.delete("/Project/:id", ProjectController.delete);

module.exports = router;
