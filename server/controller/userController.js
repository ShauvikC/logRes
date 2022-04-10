import { User } from "../model/userModel.js";
import session from 'express-session';

const setData = async (req, res) => {
  try {
    const payload = req.body;
    const newUser = new User(payload);
    if (await newUser.save()) {
      res.status(200).json({ data: newUser });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkData = async (req, res) => {
  try {
    const { userName: userName, password: password } = req.body;
    const result = await User.findOne({ userName: userName });
    if (result.password === password) {
      req.session.isAuth = true;
      res.status(200).json({ msg: `Welcome ${userName}` });
    } else {
      res.status(404).json({ msg: `user name and password didn't matched` });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const userController = {
  setData,
  checkData,
};

export default userController;
