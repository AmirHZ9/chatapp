import React from 'react'
import { auth } from '../Firebase'
import { useHistory } from 'react-router-dom'
import {ChatEngine} from 'react-chat-engine'
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

            <ChatEngine
                height="calc(100vh-50px)"
                projectID="0bfdaf2c-99bb-4d74-a9d1-9c7b3d4d91c2"
                userName='.0'
                userSecret="."
            />
        </div>
    )
}

export default Chats
