const { Hashes } = require("../model/hashesModel");
const { User } = require("../model/userModel");
const AppError = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../utils/sendEmail");

const validateEmail = (email) => {
  // Regular expression for a simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const registerController = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    if (!email || !password || !username) {
      return res.status(400).send("All Fields are required");
    }

    // Check if the email format is valid
    if (!validateEmail(email)) {
      // return next(new AppError("Invalid email format", 400));
      return res.status(400).send({ message: "Invalid email format" });
    }

    const isEmail = await User.findOne({ email: req.body.email });
    if (isEmail) {
      return res.status(400).send({ message: "User Already Exist" });
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const userData = {
      username: req.body.username,
      email: req.body.email,
      created: new Date(),
      password: encryptedPassword,
    };

    await User.create(userData);
    res.status(200).send({
      message: "User Created",
    });
  } catch (e) {
    return res.status(400).send({ message: `${e}` });
  }
};

const loginController = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).send("Invalid password");
    }

    // You can generate and return a token for authentication here
    // For example, using a library like jsonwebtoken

    // Once the user is authenticated, you can send a success response
    res.status(200).send({
      message: "Login successful",
      user: user,
      // You can include a token here if you're using authentication tokens
    });
  } catch (e) {
    return res.status(400).send({ message: `${e}` });
  }
};
const forgetPassword = async (req, res, next) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send("User not found");
    }
    const hashData = {
      userId: user.id,
      password: user.password,
    };
    const hash = await Hashes.create(hashData);
    console.log("hashes created");
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: user.email,
      subject: "Password Reset",
      text: `Please Click the link to reset password 
    https://eat-safely-theta.vercel.app/reset-password?hashesId=${hash.id}`,
    };
    sendEmail(mailOptions);
  } catch (e) {
    console.log("err", e.message);
    res.status(500).send(e);
  }
};
const resetPassword = async (req, res, next) => {
  try {
    const { hashesId, password } = req.body;
    if (!hashesId) {
      return res.status(404).send("Hash not found");
    }
    const hash = await Hashes.findById(hashesId);
    if (!hash) {
      return res.send({ data: "https://eat-safely-theta.vercel.app/forgot-password" });
    }

    let encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(
      hash.userId,
      { password: encryptedPassword },
      { new: true }
    );

    if (!user) {
      // If the user is not found after updating the password, redirect to the forgot-password page
      return res.send({ data: "https://eat-safely-theta.vercel.app/forgot-password" });
    }

    await Hashes.deleteOne({ _id: hash._id });

    // Respond with a success message or the updated user information
    res.status(200).send({ data: "https://eat-safely-theta.vercel.app/" });
  } catch (e) {
    console.log("err", e.message);
    res.status(500).send(e);
  }
};

module.exports = {
  registerController,
  loginController,
  forgetPassword,
  resetPassword,
};
