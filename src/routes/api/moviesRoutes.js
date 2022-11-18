const express = require("express");
const router = express.Router();
const {create,destroy} = require("../../controllers/APis/moviesController");

router.post("/create",create);
router.delete("/delete/:id",destroy);

module.exports = router;
