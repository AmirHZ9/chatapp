import React ,{useState,useEffect ,children} from 'react'
import {useHistory} from 'react-router-dom'
import { auth } from '../Firebase'

const Authcontext = React.createContext();

function AuthContextProvider({children}) {

    const [loading, setLoading] = useState(true)
    const [user , setUser ]= useState(false)
    const history  = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
            if (user) history.push('/chats')
        })
    },[user,history])
    return (
        <Authcontext.Provider value={user}>
            {!loading && children}
        </Authcontext.Provider>
    )
}

export default AuthContextProvider
