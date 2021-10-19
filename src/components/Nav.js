import React from 'react'
import styles from '../styles/Nav.module.css'
function Nav({logoutHandler}) {
    return (
        <div className={styles.container}>
            <div className={styles.chat}>
                ChatApp
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
                Logout
            </div>
        </div>
    )
}

export default Nav
