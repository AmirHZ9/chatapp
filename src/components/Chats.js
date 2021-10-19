import React from 'react'
import { auth } from '../Firebase'
import { useHistory } from 'react-router-dom'
import Nav from './Nav'
function Chats() {
    const history = useHistory()
    const logoutHandler =async () =>{
        await auth.signOut();
        history.push('/')
    }
    return (
        <div>
            <Nav logoutHandler={logoutHandler} />
        </div>
    )
}

export default Chats
