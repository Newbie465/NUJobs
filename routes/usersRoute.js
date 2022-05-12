const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
router.post("/register", async (req, res) => {
    try {
      const userCheck = await User.findOne({
        username: req.body.username,
      });
      if (!userCheck){
        const newuser = new User(req.body);
        const user = await newuser.save();
        res.send("User Created Successfully");
      }else{
        return res.status(401).json({ message: "Username already exists" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/update', async (req, res)=>{
  try{
    const updatedUser = await User.findOneAndUpdate({_id:req.body._id}, req.body)
    const user = await User.findOne({_id: req.body._id})

    res.send(user)
  }catch(err){
    return res.status(400).json({err})
  }
})

module.exports = router;