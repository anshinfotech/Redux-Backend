const express = require("express");
const { submitdata, allusers, singleuser, updateUser, deleteUser, verifyUser, loginUser } = require("../Controllers/userController");
const router = express.Router();

router.post("/submitdata",submitdata)
router.get("/allusers",allusers)
router.get("/singleuser",singleuser)
router.delete("/deleteuser/:id",deleteUser)
router.put("/updateuser/:_id",updateUser)
router.post("/verifyuser/:_id",verifyUser)
router.post("/loginuser/",loginUser)


module.exports = router;
