const express = require("express");
// const getAllUser  = require("../controllers/user-controller.js");
// const signup  = require("../controllers/user-controller.js");
// const login  = require("../controllers/user-controller.js");
const { getAllUser, signup, login, retrive } = require("../controllers/user-controller.js");

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.get('/:id', retrive)
module.exports = router;