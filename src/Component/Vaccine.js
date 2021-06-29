import React, {useState, useEffect} from 'react'
import fetchData from './Actions/vaccineAction'
import { useDispatch, useSelector } from 'react-redux';

const Vaccine = () => {

    const [pincode, setPincode] = useState(452001)
    const [date, setDate] = useState("15-05-2021");
    const [data, setData] = useState([])
    const [arr, setArr] = useState([])
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    const response = useSelector((state) => state.vaccineReducer.data);
    const loading = useSelector((state) => state.vaccineReducer.loading);
    const error = useSelector((state) => state.vaccineReducer.error);

    console.log("main state file me", arr);

    const dispatch = useDispatch()

    const getData = () =>{
    dispatch(fetchData({pincode, date}))
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
       setData(response)
       setArr(response)
    }, [response])

   

    const searchFilterFunction = (text) => {

        setValue(text)
        const newData = arr.filter(item => {
           const itemData =  `${item.name.toUpperCase()}, 
           ${item.address.toUpperCase()}, 
           ${item.fee_type.toUpperCase()} `
           const textData = text.toUpperCase()
           return itemData.indexOf(textData) > -1
        }); 
        setData(newData)

    };

    const serachByVaccine = (text) =>{
        setValue2(text)
        const onlyData = arr.filter((value)=> value.sessions.filter((value)=> {
           const valueData =  `${value.vaccine.toUpperCase()} `
           const textData1 = text.toUpperCase()
           return valueData.indexOf(textData1) > -1
        })); 
        setData(onlyData)
    }

    return (
        <div>

     <div className="wraper">

            <h1 className="heading">Check Vaccine Availablity</h1>
          
            <span style={{fontSize:20}}>Select Your PinCode</span><br></br>
            <input className="input"
            value={pincode}
            placeholder="Enter Your Pincode" 
            onChange={(event)=>setPincode(event.target.value)}

            /><br></br>
            <span style={{fontSize:20}}>Select Date</span><br></br>
          
            <input className="input"
            value={date}
            placeholder="12-05-2021" 
            onChange={(event)=>setDate(event.target.value)}

            /><br></br>
    
             <button className="btnSearch" onClick={()=>getData()}>Search</button> <br></br>

             <input className="InputField"
                    type="text"
                    value={value}
                    placeholder="Search Details"
                    onChange={({ target }) => searchFilterFunction(target.value)}
                />

             <input className="InputField"
                    type="text"
                    value={value2}
                    placeholder="Search by Vaccine"
                    onChange={({ target }) => serachByVaccine(target.value)}
                />

             </div> 

            <div>
                 { 
                 
                 loading ? ( <div>Loading</div> ) :

                 error ? ( <div>{error}</div> ) :

                 response.length > 0  ? 
                
                 
                 
                 ( 
                     <div className="wraper2">
                    <table>
                     <caption>Detail</caption>
                     <thead>
                         <tr style={{color:'red'}}>
                             <th>Name</th>
                             <th>Address</th>
                             <th>Fees Type</th>
                             <th>Date</th>
                             <th>Available_Capacity</th>
                             <th>Age</th>
                             <th>Vaccine</th>
                             <th>City</th>
                             
                         </tr>
                     </thead>
                     <tbody>
                         {   data.map((item, key)=>item.sessions.map((value, key)=> (
 
                             <tr key={key}>
                                 <td style={{textAlign:'center'}}>{item.name}</td>
                                 <td style={{textAlign:'center'}}>{item.address}</td>
                                 <td style={{textAlign:'center'}}>{item.fee_type}</td>
                                 <td style={{textAlign:'center', width:100}}>{value.date}</td>
                                 <td style={{textAlign:'center'}}>{value.available_capacity}</td>
                                 <td style={{textAlign:'center'}}>{value.min_age_limit}</td>
                                 <td style={{textAlign:'center'}}>{value.vaccine}</td>
                                 <td style={{textAlign:'center'}}>{item.district_name}</td>
                             </tr>
                         )))
                     


                       }
                     </tbody>
                     </table>
                     </div>
                   ) :   ( <h1 style={{textAlign:'center', color:'red'}}>No Data Found</h1> )
                
                 }
             </div>
            
        </div>
    )
}

export default Vaccine;
