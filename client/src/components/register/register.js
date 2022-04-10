import { useState } from "react";
import {setUser} from '../Api/userApi.js'

function Register() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const obj = {userName,password}
    await setUser(obj);
  };

  return (
    <div className="App">
      <div className="loginform">
        <h1>Register Here</h1>
        <div className="username">
          <p>Set Username</p>
          <input
            type="text"
            id="name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="pass">
          <p>Set Password</p>
          <input
            type="password"
            id="passsword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
