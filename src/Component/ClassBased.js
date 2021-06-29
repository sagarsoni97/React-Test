import React from 'react'

class ClassBased extends React.Component{

    constructor(){
        super()
        this.state={
            fname:'',
            fnameError:'',

            sname:'',
            snameError:'',

            email:'',
            emailError:'',

            phone:'',
            phoneError:'',

            password:'',
            passwordError:'',

            confirmPassword:'',
            confirmPasswordError:'',

            doneMessage:''

        }
    }

    valid(){

    let emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneno = /^\d{10}$/;

        if(!this.state.fname){
       this.setState({fnameError:"Please Enter First Name"})
       return false
     } 

     else if(!this.state.sname){
        this.setState({snameError:"Please Enter Second Name"})
        return false
      }
  
      else if(!this.state.email){
        this.setState({emailError:"Please Enter Email"})
        return false
      }
  
      else if(!this.state.phone){
        this.setState({phoneE:"Please Enter Phone Number"})
        return false
      }
  
      else if(!this.state.email.match(emailVal)){
        this.setState({emailError:"Please Enter Valid Email"})
        return false
      }
  
      else if(!this.state.phone.match(phoneno)){
        this.setState({phoneError:"Please Enter Valid Phone Number"})
        return false
      }
  
      else if(!this.state.password){
        this.setState({passwordError:"Please Enter Phone Number"})
        return false
      }
  
      else if(!this.state.confirmPassword){
        this.setState({confirmPasswordError:"Please Enter Password"})
        return false
      }
  
      else if(this.state.password !== this.state.confirmPassword){
        this.setState({confirmPasswordError:"Password Not Match"})
        return false
      }
  
      else {
        this.setState({fnameError:''})
        this.setState({snameError:''})
        this.setState({emailError:''})
        this.setState({phoneError:''})
        this.setState({passwordError:''})
        this.setState({confirmPasswordError:''})
       
      }

     return true
   }

   async signUp()
   {
    let isValid = await this.valid()
       if(isValid)
       {
        let user = {
            fname: this.state.fname,
            sname: this.state.sname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
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
          
          this.setState({fname:''})
          this.setState({sname:''})
          this.setState({email:''})
          this.setState({phone:''})
          this.setState({password:''})
          this.setState({confirmPassword:''})
          this.setState({doneMessage:"Registration Successful"})
       }
   }

    render(){

        return(
            <div>
            <h1>Hello Class</h1>

            <input className="InputField"
            type="text"
            value={this.state.fname}
            placeholder="enter a first name"
            onChange={({ target }) => this.setState({fname:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.fnameError}</p>

            <input className="InputField"
            type="text"
            value={this.state.sname}
            placeholder="enter a second name"
            onChange={({ target }) => this.setState({sname:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.snameError}</p>

            <input className="InputField"
            type="text"
            value={this.state.email}
            placeholder="enter a email name"
            onChange={({ target }) => this.setState({email:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.emailError}</p>

            <input className="InputField"
            maxLength={10}
            type="text"
            value={this.state.phone}
            placeholder="enter a phone number"
            onChange={({ target }) => this.setState({phone:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.phoneError}</p>

            <input className="InputField"
            type="text"
            value={this.state.password}
            placeholder="enter a password"
            onChange={({ target }) => this.setState({password:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.passwordError}</p>

            <input className="InputField"
            type="text"
            value={this.state.confirmPassword}
            placeholder="confirm passsword"
            onChange={({ target }) => this.setState({confirmPassword:target.value})}
          />
          <p style={{color:'red', fontSize:10}}>{this.state.confirmPasswordError}</p>

          <button className="btn" onClick={()=>this.signUp()}>Register</button>

            <p style={{color:'green', fontSize:10}}>{this.state.doneMessage}</p>
          </div>
        )
    }
}

export default ClassBased;