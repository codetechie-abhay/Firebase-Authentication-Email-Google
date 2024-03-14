import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./Firebase"; // Use a relative path

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider(); // Instantiate GoogleAuthProvider

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Successfully Created!");
      })
      .catch((error) => {
        alert(`Error creating user: ${error.code} - ${error.message}`);
      });
  };

  // Google sign-in with Google
  const signupwithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  // End of the code

  return (
    <div className="sign-up-page">
      <h1>Signup Page</h1>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password"
      />

      {/* Code for Google authentication */}
      <br />
      <button onClick={signupwithGoogle}>Sign-in with Google</button>
      <br />
      {/* End of the code */}

      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
