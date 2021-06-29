import React, { useState, useEffect } from 'react'
import fire from '../firebaseData'
import {addProduct, removeProduct} from './Actions/index'
import {useDispatch} from 'react-redux'

const Products = () => {

    const [products] = useState([
       
       
        
    ])

    const dispatch = useDispatch()

    const [cart, setCart] = useState([])
    const [page, setPage] = useState('productPage')
    const [cost, setCost] = useState('')
   

    const addToCart = (...item) =>{
         dispatch(addProduct([...item, item]))
    }

    const viewCart = () =>{
        setPage("cartPage")
    }

    const removeItem = (id) =>{
        dispatch(removeProduct(id))
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
