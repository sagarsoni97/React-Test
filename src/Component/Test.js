import React, { useState, useEffect } from 'react'
import fire from '../firebaseData'
import {addProduct, removeProduct} from './Actions/index'
import {useDispatch} from 'react-redux'

const Products = () => {

    const [products] = useState([
       
        {
            name: "tshirt",
            price: 500,
            image: 'https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg'
        },
        {
            name: "mobile",
            price: 25000,
            image: 'https://www.lg.com/in/images/mobile-phones/md07519000/thumbnail/LMK315IM-350-03.jpg'
        },
        {
            name: "laptop",
            price: 25000,
            image: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
        },
        {
            name: "camera",
            price: 20000,
            image: 'https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg'
        }
        
    ])



    const [cart, setCart] = useState([])
    const [page, setPage] = useState('productPage')
    const [cost, setCost] = useState('')
   

    const addToCart = (item) =>{
         setCart([...cart, item])
    }

    const viewCart = () =>{
        setPage("cartPage")
    }

    const removeItem = (id) =>{
       const newData = cart.filter((item, index) => index !== id)
       setCart(newData)
    }

    const getTotalCost = () =>{
        let sumData = cart.reduce((sum, {price})=> sum + price, 0)
        console.log(sumData);
        setCost(sumData)
    }

    useEffect(()=>{
        getTotalCost()
    },[cart])


    return (
        <div className="App">
            <button onClick={()=>viewCart()}>View Cart({cart.length})</button>

        {
            page==="productPage" ? <> <h1>Products List</h1>
            <div className="product">
                {products.map((item, index) => {
                    return (
                        <div className="products" key={index}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <img className="image" src={item.image} />
                            <button onClick={()=>addToCart(item)}>Add To Cart</button>
                            {/* <button onClick={()=>dispatch(addProduct(item))}>Add To Cart</button> */}
                        </div>
                    )
                })
                }
            </div> </> : 
            <> <button onClick={()=>setPage('productPage')}>View Product</button>
             <h1>cart page</h1> 
           {
               cost>0 ? <h2 style={{color:"red"}}>Total Cost: {cost}</h2> : null
           }
                 
            
             <div className="product">
             {cart.map((item, index) => {
                    return (
                        <div className="cartProducts" key={index}>
                            <p>{item.name}</p>
                            <p>Price {item.price} Rs</p>
                            <img className="image" src={item.image} />
                            <button onClick={()=>removeItem(index)}>Remove</button>
                        </div>
                    )
                })
                }
           
            </div>
             </>
        }


            
        </div>
    )
}

export default Products
