import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase"; // Use a relative path


const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
    //we will create a function of signinuser
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then(value=>console.log("Signin Success!!!!!")).catch((err)=>console.log(err));
    };

  return (
    <div className="sign-in-page">
      <h1>Sign-in Page</h1>
      <label>Enter your Email</label>
      <input
        type="email"
        placeholder="email here!"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Enter your Password</label>
      <input
        type="password"
        placeholder="password here!"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={signinUser}>Sign me in</button>
    </div>
  );
};

export default SigninPage;
