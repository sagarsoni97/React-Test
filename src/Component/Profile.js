import React, {useState, useEffect} from 'react'
import fire from '../firebaseData'
import { useHistory, Link } from 'react-router-dom';

const Profile = () => {

    const [productName, setProductName] = useState('')
    const [productCost, setProductCost] = useState('')

    const [productList, setProductList] = useState([]);

    const history = useHistory()

    const getData = async()=>{
        const productRef = await fire.database().ref('product');
        productRef.on('value', (snapshot) => {
          const product = snapshot.val();
          const productList = [];
          for (let id in product) {
            productList.push({ id, ...product[id] });
          }
          setProductList(productList);
        });
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteTodo = async(id) => {
        const productRef = await fire.database().ref('product').child(id);
        productRef.remove();
      };

    const logOut = () =>{
        try {
             fire.auth().signOut()
        .then(()=>{
            history.push('/')
        })
        } catch (error) {
            console.log("user check info")
        } 
    }

    // add product

    const PostData = async() =>{
     try {
       const addData = fire.database().ref('product')
       const product = {
           productName,
           productCost
       }

       addData.push(product)

        setProductName('');
        setProductCost('');
     } catch (error) {
         alert(error)
     } 
    }

    const updateProduct = (item) => {
        
        setProductName(item.productName)
        setProductCost(item.productCost)
      const productRef = fire.database().ref('product').child(item.id);
      productRef.update({
        productName:item.productName,
        productCost:item.productCost
      })
      
      
      };


    return (
        <div>
            <h2>Welcome</h2>
            <button onClick={()=>logOut()}>logout</button>
            <Link to="Products"> See Products </Link>
            <div>
                <h1>Add Product</h1>
            <input className="InputField"
                type="text"
                value={productName}
                placeholder="enter product name"
                onChange={({ target }) => setProductName(target.value)}
            /><br></br>
            <input className="InputField"
                type="text"
                value={productCost}
                placeholder="enter product cost"
                onChange={({ target }) => setProductCost(target.value)}
            /><br></br>
            <button onClick={()=>PostData()}>Add Product</button>
            </div>

            <div>
            <h1>Product List</h1>

            {productList
        ? productList.map((item, index) => 
        <p key={index}>{item.productName} {item.productCost} 
        <button onClick={()=>deleteTodo(item.id)}>delete</button>
         <button onClick={()=>updateProduct(item)}>update</button></p>)
        : ''}
        </div>
        </div>
    )
}

export default Profile
