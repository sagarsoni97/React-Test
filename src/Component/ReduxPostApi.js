import React, {useState, useEffect} from 'react'
import addUser from '../Component/Actions/addUser';
import { useDispatch, useSelector } from 'react-redux';

const ReduxPostApi = () => {

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

        const getData = () =>{
            dispatch(addUser({title, body, userId}))
            }
        
           

    return (
        <div>
            <h2>Hello POst Your Data</h2>

            <input className="InputField"
                    type="text"
                    value={userId}
                    placeholder="enter your userId"
                    onChange={({ target }) => setUserId(target.value)}
            />
            <input className="InputField"
                    type="text"
                    value={title}
                    placeholder="enter your title"
                    onChange={({ target }) => setTitle(target.value)}
            />
            <input className="InputField"
                    type="text"
                    value={body}
                    placeholder="enter your body data"
                    onChange={({ target }) => setBody(target.value)}
            />

            <button onClick={()=>getData()}>ADD User</button>

        </div>
    )
}

export default ReduxPostApi
