import React from 'react'

class ClassBased extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            data:[]
        }
    }

    signup = () => {
        try {
            const valueString = localStorage.getItem('user');
            const value = JSON.parse(valueString);
            const isUser = value.find((item)=>
            (item.email===this.state.email && item.password===this.state.password))
            if (isUser) {
                console.log("nice");
            }else{
                console.log("wrong");
            }
            this.setState({
                email:'',
                password:''
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state.data);

        return (
            <div>
                <h1>Hello Class Login Here</h1>

                <input className="InputField"
                    type="text"
                    value={this.state.email}
                    placeholder="enter your email"
                    onChange={({ target }) => this.setState({ email: target.value })}
                />
                    <br></br><br></br>
                <input className="InputField"
                    type="text"
                    value={this.state.password}
                    placeholder="enter your password"
                    onChange={({ target }) => this.setState({ password: target.value })}
                />
                <br></br><br></br>
                <button onClick={()=>this.signup()}>Login</button>
            </div>
        )
    }
}

export default ClassBased;