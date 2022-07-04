console.clear();

const express = require("express");
const router = express.Router();
// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const {registerRules,validation }= require ("../middleware/validator")
const controllers= require("../controllers/user")


//test
// router.get("/", (req,res)=> {
// res.send("Hello Point of Sale")
// })

// Register point of sale
router.post("/register", registerRules(), validation, controllers.register);



module.exports = router;
