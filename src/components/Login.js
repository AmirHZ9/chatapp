import React from 'react'
import google from "../assets/google.svg"
import styles from "../styles/login.module.css"
function Login() {
    return (
        <div>
            <div className={styles.container}>
                 <h1>ChatApp</h1>
                <p>sign in with :</p>
                <button>sign in with<img src={google}/></button>   
            </div>
                        
        </div>
    )
}

export default Login
