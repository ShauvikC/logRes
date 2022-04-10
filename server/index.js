import express from "express";
import connectDB from "./db/connect.js";
import userRoute from "./routes/userRoute.js";
import "dotenv/config";
import cors from "cors";
import session from "express-session";
import MongoDBSession from "connect-mongodb-session";


const mongoDBSession = MongoDBSession(session);
const app = express();
const port = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI);

const store = new mongoDBSession({
  uri: process.env.MONGO_URI,
  collection: "sessionID",
});

const isAuth =(req,res,next)=>{
if(req.session.isAuth){
  res.status(200)
}else{
  res.status(401)
}
}

app.use(
  session({
    secret: "ThisIsASecretKey",
    resave: false,
    saveUninitialized: false,
    store: store,

  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`server is connected at port ${port}...`);
});
