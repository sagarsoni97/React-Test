import React, { useState, useEffect } from "react";

const Login = () => {

    const [data, setData] = useState([]);
    const [arr, setArr] = useState([])
    const [value, setValue] = useState('')
    const [dataUpdate, setDataUpdate] = useState(false);
    const [sortedField, setSortedField] = useState(null)
    const [checked, setChecked] = useState(false)

    useEffect(() => [
        signup()
    ], [])

    const signup = () => {
        try {
            const valueString = localStorage.getItem('user');
            const value = JSON.parse(valueString);
            setData(value)
            setArr(value)
        } catch (error) {
            console.log(error);
        }
    }

    if (sortedField !== null) {
        data.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return -1;
            }
            if (a[sortedField] > b[sortedField]) {
                return 1;
            }
            return 0;
        });
    }

    // if(checked !== null){
    //     alert(checked)
    // }


    useEffect(() => {
        console.log('data', data)
    }, [data])


    const searchFilterFunction = (text) => {
        setValue(text)
        const newData = arr.filter(item => {
            const itemData = `${item.fname === text.toUpperCase()}, 
            ${item.sname.toUpperCase()}, ${item.email.toUpperCase()}, 
            ${item.address.toUpperCase()}, 
            ${item.phone.toUpperCase()}, ${item.salary.toUpperCase()},
            ${item.experience.toUpperCase()}, ${item.phone.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData(newData)
    };

    return (
        <div className="container">
            <div >
                <label>Exact Search</label>
                <input type="checkbox" value="checked" />
                <label>Not Exact Search</label>
                <input type="checkbox" value="checked" />
                <input className="inputField"
                    type="text"
                    value={value}
                    placeholder="Search Details"
                    onChange={({ target }) => searchFilterFunction(target.value)}
                /></div>
            <br></br>
            <br></br>

            <div className="tabDiv">
                <table>
                    <caption>Detail</caption>
                    <thead>
                        <tr>
                            <th> <button onClick={() => setSortedField('fname')}>First Name</button></th>
                            <th><button onClick={() => setSortedField('sname')}>Second Name</button></th>
                            <th> <button onClick={() => setSortedField('email')}>Email</button></th>
                            <th> <button onClick={() => setSortedField('address')}>Address</button></th>
                            <th><button onClick={() => setSortedField('salary')}>Salary</button></th>
                            <th><button onClick={() => setSortedField('experience')}>Experience</button></th>
                            <th><button onClick={() => setSortedField('phone')}>Phone</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (

                            <tr key={item.fname}>
                                <td>{item.fname}</td>
                                <td>{item.sname}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.salary}</td>
                                <td>{item.experience}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Login;