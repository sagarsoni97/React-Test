import React, {useState, useEffect} from 'react'

const SlotBook = () => {

    var ageData = "COVISHIELD"

    const [pincode, setPincode] = useState(452001)
    const [date, setDate] = useState("20-05-2021");
    const [data, setData] = useState([])
    const [slot, setSlot] = useState([])
    const [filterSlot, setFilterSlot] = useState([])
    const [age, setAge] = useState([])

    console.log("slot data ",data);
    console.log("flitered slot data ",age);

    const fetchData = () => {
fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=493661&date=20-05-2021`)
            .then(res => res.json())
            .then(json => {
                setData(json.centers)
                setSlot(json.centers)
            })
        };

        useEffect(() => {
            setAge(slot.map((item)=>item.sessions.map((value)=>value))) 
            setFilterSlot(
                age.filter((secondArr) => 
                { 
                return (secondArr.vaccine === ageData)
                  })
            );
          }, [slot]);
 
        //    const filteredData = age.filter((newData)=>{
        //         return newData.vaccine === "COVAXIN" 
        //    })
        //    console.log("slot data ", filteredData);
        

        // const searchFilterFunction = () => {
        //     const newData = data.map((item)=>item.sessions.map((value)=> {
        //         return value;
        //     })
        //     )
        //     setAge(newData)
        // };
       

        // useEffect(() => {
        //     // const interval = setInterval(() => {
        //     // }, 100000);
        //     // return () => clearInterval(interval);
        //   }, []);


    return (
        <div>
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
  
           <button className="btnSearch" onClick={()=>fetchData()}>Search</button> <br></br>
           {/* <button className="btnSearch" onClick={()=>searchFilterFunction()}>filter</button> <br></br> */}

        </div>
    )
}

export default SlotBook;
