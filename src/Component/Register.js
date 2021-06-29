import React, { useState } from "react";

const Register = () => {
  const [fname, setFname] = useState('');
  const [fNameError, setfNameError] = useState('');

  const [sname, setSname] = useState('');
  const [sNameError, setsNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const [doneMessage, setDoneMessage] = useState('');

  const valid = () =>{


let emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneno = /^\d{10}$/;


    if(!fname){
      setfNameError("Please Enter First Name")
      return false
    } 

    else if(!sname){
      setsNameError("Please Enter Second Name")
      return false
    }

    else if(!email){
      setEmailError("Please Enter Email")
      return false
    }

    else if(!phone){
      setPhoneError("Please Enter Phone Number")
      return false
    }

    else if(!email.match(emailVal)){
      setEmailError("Please Enter Valid Email")
      return false
    }

    else if(!phone.match(phoneno)){
      setPhoneError("Please Enter Valid Mobile Number")
      return false
    }

    else if(!password){
      setPasswordError("Please Enter Password")
      return false
    }

    else if(!confirmPassword){
      setConfirmPasswordError("Please Confirm Password")
      return false
    }

    else if(password !== confirmPassword){
      setConfirmPasswordError("Password Not Match")
      return false
    }

    else {
      setfNameError('')
      setsNameError('')
      setEmailError('')
      setPhoneError('')
      setPasswordError('')
      setConfirmPasswordError('')
    }
    return true
  }

  const signUp = async () =>{
    let isValid = await valid()
    if(isValid){

      let user = {
        fname,
        sname,
        email,
        phone,
        password,
        confirmPassword
      };
    
      const arrData = [user];
    
      const storedData = localStorage.getItem('user');
      const storedDataParsed = JSON.parse(storedData);
    //   setData(storedDataParsed);
      console.log('value set info', JSON.stringify(storedDataParsed));

      let newData = [];

      if (storedData === null) {
        // save
     localStorage.setItem('user', JSON.stringify(arrData));
        console.log('value set info', JSON.stringify(arrData));
      } else {
        newData = [...storedDataParsed, user];
     localStorage.setItem('user', JSON.stringify(newData));
      }
      
      setFname('');
      setSname('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setDoneMessage('Registration Succesful')
    }
  }


  return (
    <div className="App">
     
        <h1>Register Here</h1>

        <input className="InputField"
          type="text"
          value={fname}
          placeholder="enter a first name"
          onChange={({ target }) => setFname(target.value)}
        />
        <p style={{color:'red', fontSize:10}}>{fNameError}</p>
        <input className="InputField"
          type="text"
          value={sname}
          placeholder="enter a second name"
          onChange={({ target }) => setSname(target.value)}
        />
         <p style={{color:'red', fontSize:10}}>{sNameError}</p>
        <input className="InputField"
          type="text"
          value={email}
          placeholder="enter a email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <p style={{color:'red', fontSize:10}}>{emailError}</p>
        <input className="InputField"
          type="text"
          value={phone}
          placeholder="enter a phone"
          maxLength={10}
          onChange={({ target }) => setPhone(target.value)}
        />
      <p style={{color:'red', fontSize:10}}>{phoneError}</p>
        <input className="InputField"
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
       <p style={{color:'red', fontSize:10}}>{passwordError}</p>
        <input className="InputField"
          type="password"
          value={confirmPassword}
          placeholder="enter a confirm password"
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
         <p style={{color:'red', fontSize:10}}>{confirmPasswordError}</p>
        <button onClick={()=>signUp()}>Register</button>
        <p>{doneMessage}</p>
    </div>
  );
}

export default Register;
