import React from 'react'
import styles from '../styles/Nav.module.css'
function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.chat}>
                ChatApp
            </div>
            <div className={styles.logout}>
                Logout
            </div>
        </div>
    )
}

export default Nav
