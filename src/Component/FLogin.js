import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import fire from '../firebaseData'

import Profile from './Profile'




const FLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false)

    const history = useHistory()

    const signIn = async() =>{
        try {
            await fire.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            setUser(true)
            history.push('/Profile')
        })
        } catch (error) {
            console.log("user check info")
        }
       
    }

    const logOut = () =>{
        try {
             fire.auth().signOut()
        .then(()=>{
            setUser(false)
            alert("Logout Success")
        })
        } catch (error) {
            console.log("user check info")
        }
       
    }


    return (
        <div>
            <h2>This is Login page</h2>
            <input className="InputField"
                type="text"
                value={email}
                placeholder="enter your email"
                onChange={({ target }) => setEmail(target.value)}
            /><br></br> <br></br>
            <input className="InputField"
                type="text"
                value={password}
                placeholder="enter your password"
                onChange={({ target }) => setPassword(target.value)}
            /><br></br>
            <button onClick={()=>signIn()}>Login</button>
            <button onClick={()=>logOut()}>logout</button>
            <br></br> <br></br>
            <Link to="FSignup"> Don't have account Signup here. </Link>

            {
                user ? <Profile />
                :
               <h2>Not Logged in</h2>
            }

        </div>
    )
}

export default FLogin;