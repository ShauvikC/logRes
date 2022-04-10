const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());


app.post("/login", (req, res) => {
  //Login flow
  const { username, password } = req.body;

  //Task for students 😉 (using db to find the user,if user exists,will authenticate,else will return "Invalid User" )
  const userObj = { name: username, password: password };

  const secretToken = jwt.sign(userObj, process.env.SECRET_TOKEN);

  res.status(200).json({ token: secretToken });
});

app.listen(3000);

//Theory for JWT:

/**
 *
 * Why do we need JWT or session:
 *
 * HTTP is stateless..
 * Stateless : the server and the client both forgets any http transaction which is completed and for getting data next time,all the required headers and identiity needs to be sent to the server!
 *
 * this makes HTTP "stateless" = it forgets the state of the previous request!
 *
 * now to get data from the database,the serevr needs to know our identity
 * JWT is one of the ways to establish a secure identity.
 * IT SAVES NUMEROUS DATABASE HITS (WILL EXPLAIN HOW,DONT WORRY)
 *
 *
 * JSON web tokens contains Three different parts
 * 1)head
 * 1)body
 * 3)signature
 *
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. //Head                   eyJuYW1lIjoic21pdHJhIiwicGFzc3dvcmQiOiJjYXRzd2lsbHJ1bGV0aGV3b3JsZCIsImlhdCI6MTY0NjAzMjg0Nn0.        //Body
 * eIc8vS0Q4413aJB69qJXX4R2qOnUVJ90WLXj7hs68iU //Signature,done with jwt.sign
 *
 * all three of them are base64 encoded.
 *
 * What is base 64 encoding?
 *
 * Lets understand :
 * base64 encoding is one of the most widely used encoding on the internet,
 * how it works?
 *
 * 1)TAKES A STRING
 * 2)CONVERTS IT INTO BINARY
 * 3)WITH EACH BINARY GROUPED OF 6,CONVERT THEM INTO CORRESPONDING CHARACTERS
 *
 * LIST OF ALLOWED CHARS = a-z,A-Z,+,-,0-9 (26+26+10+2=64) THUS THE NAME BASE"64"
 *
 * FOR EXAMPLE : binary form of 'a' is '01100001' so if divided into a block of 6,2 of the last chars are left,these are padded with "=" by base 64 excoding
 * we will now check the console. with this knowledge lets go back to JWT
 *
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. //Head -----> base64 encoded
 *
 * eyJuYW1lIjoic21pdHJhIiwicGFzc3dvcmQiOiJjYXRzd2lsbHJ1bGV0aGV3b3JsZCIsImlhdCI6MTY0NjAzMjg0Nn0.//Body -> base64 encoded
 *
 * eIc8vS0Q4413aJB69qJXX4R2qOnUVJ90WLXj7hs68iU //Signature,done with jwt.sign  --> base64 encoded
 *
 * but when we sign with jwt ,it takes a second param : with which it seals the signature,with is the actual hash
 *
 * signature = HS256(head+body+secret) // what is the secret? --> process.env.SECRET_TOKEN,will show you how to generate that using nodes crypto library
 *
 * crypto -> randomBytes(32,64,....,the more the better),--> convert to string of hexadecimals [this is production technique to generate secret token,its not that hard]
 *require(crypto).randomBytes(64).toString('hex')
 *
 * now the client sends this token everytime it needs a resource from the server,the server verifies the signature part,
 * if its tampered,it produces an error
 *
 * //JWT -> jwt.verify is the function
 *
 * now this is the end of my knowledge,you can dig deeper,but i wont recommend 🤣🤣🤣
 *
 */
