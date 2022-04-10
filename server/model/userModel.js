import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = Mongoose.model('User', userSchema);

export { User };
