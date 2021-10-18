import React from "react";
import firebase from 'firebase/compat/app'
import { auth } from "../Firebase";
import google from "../assets/google.svg";
import styles from "../styles/login.module.css";
function Login() {
  return (
    <div>
      <div
        className={styles.container}
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        <h1>ChatApp</h1>
        <button>
          sign in with
          <img src={google} />
        </button>
      </div>
    </div>
  );
}

export default Login;
