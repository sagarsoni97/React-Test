import React from 'react'

class ClassBased extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            userId: '',
            data: []
        }
    }

    postData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users"
                , {
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.state.title,
                        body: this.state.body,
                        userId: this.state.userId,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            )
                .then((response) => response.json())
                .then((json) => console.log(json));
        } catch (error) {
            console.warn(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Hello Class Post Data</h1>

                <input className="InputField"
                    type="text"
                    value={this.state.userId}
                    placeholder="enter your userId"
                    onChange={({ target }) => this.setState({ userId: target.value })}
                />
                <br></br><br></br>

                <input className="InputField"
                    type="text"
                    value={this.state.title}
                    placeholder="enter your title"
                    onChange={({ target }) => this.setState({ title: target.value })}
                />
                <br></br><br></br>
                <input className="InputField"
                    type="text"
                    value={this.state.body}
                    placeholder="enter your body"
                    onChange={({ target }) => this.setState({ body: target.value })}
                />
                <br></br><br></br>
                <button onClick={() => this.postData()}>Post Data</button>
            </div>
        )
    }
}

export default ClassBased;