import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "../contexts/StateContext";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducers/Reducer";
import "../Style/Login.css";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />

        <div className="login__text">
          <h1>Sing in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
