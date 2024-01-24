const mongoose = require("mongoose");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const Error = require("../middleware/error.js").createError;
const jwt = require("jsonwebtoken");

module.exports = {
  signUp: async (req, res, next) => {
    
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hash });
      
      await newUser.save();
      res.status(200).send("User has been created");
    } catch (err) {
      next(Error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const user = await User.findOne({ name: req.body.name });
      if (!user) return next(Error(404, "User not found"));

      const isCorrect = bcrypt.compare(req.body.password, user.password);
      if (!isCorrect) return next(Error(405, "Wrong Credentials"));

      const token = await jwt.sign({id: user._id}, process.env.jwt);
      const { password, ...others } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true
        })
        .status(200)
        .json(others);
    } catch (err) {
      next(err);
    }
  }
};
