import React, {useState} from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import fire from '../firebaseData'

const FSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()
    

    const register = async() =>{
        try {
            await fire.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{ 
             history.push('/Profile')
            })
          } catch (e) {
            alert(e);
          }
    }
  
    return (
        <div>
             <h2>This is Signup page</h2>
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
            <button onClick={()=>register()}>Register</button>
            <br></br> <br></br>
            <NavLink to="/"> Already have account Login here... </NavLink>
        </div>
    )
}

export default FSignup;