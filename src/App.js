import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase"; // Use a relative path
import "./App.css";
import SignUpPage from "./components/Signup";
import SignInPage from "./components/Signin"; // Correct component name

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(null);

  const togglePage = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log("Hey! You are logged in!");
      } else {
        console.log("Sorry! You are logged out");
        setUser(null);
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe the observer on component unmount
    };
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Firebase App</h1>
      {user ? (
        <>
          <h1>Hello {user.email}</h1>
          <button onClick={handleSignOut}>Logout</button>
        </>
      ) : (
        <>
          {toggle ? <SignUpPage /> : <SignInPage />}
          <button onClick={togglePage}>
            {toggle ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </button>
        </>
      )}
    </div>
  );
};

export default App;
