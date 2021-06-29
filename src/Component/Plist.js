import React, { useState, useEffect } from 'react';
import { addProduct, removeProduct, addQuantity, subtractQuantity } from './Actions/index';
import { useDispatch, useSelector } from 'react-redux';

const Plist = () => {

    const [page, setPage] = useState('productPage')

    const items = useSelector((state) => state.productReducer.product);
    const cart = useSelector((state) => state.productReducer.productList);
    const total = useSelector((state) => state.productReducer.total);


    const dispatch = useDispatch()

    const addToCart = (id) => {
        dispatch(addProduct(id))
    }

    const viewCart = () => {
        setPage("cartPage")
    }

    const removeItemData = (id) => {
        dispatch(removeProduct(id))
    }

    const addProductQuantity = (id) => {
        dispatch(addQuantity(id))
    }

    const subtractProductQuantity = (id) => {
        dispatch(subtractQuantity(id))
    }

    return (
        <div className="App">
            {
                page === "productPage" ? <>

                    <div className="App-header">
                        <h1>Product List</h1>
                        <button style={{ justifyContent: 'space-between' }} onClick={() => viewCart()}>View Cart({cart.length})</button>
                    </div>

                    <div className="product">
                        {
                            items.map((item, index) => {
                                return (
                                    <div className="products" key={index}>
                                        <p style={{ fontSize: 20, textAlign: 'left', marginBottom: '-5%' }}>{item.name}</p>
                                        <p>Price {item.price} INR</p>
                                        <img className="image" src={item.image} />
                                        <button className="btn" onClick={() => addToCart(item.id)}>Add To Cart</button>
                                    </div>
                                )
                            })
                        }
                    </div> </> : <>
                    <div className="App">
                        <div className="App-header">
                            <button onClick={() => setPage('productPage')}>View Products</button>
                            <h2 style={{ color: 'red' }}>Total Cost {total}</h2>
                            <button >Checkout</button>
                        </div>
                        <div className="product">
                            {cart.map((item) => {
                                return (
                                    <div className="cartProducts" key={item.id}>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <img className="image" src={item.image} />

                                        <div className="card">
                                            <button className="minusBtn" onClick={() => subtractProductQuantity(item.id)}>-</button>
                                            <p>Quantity: {item.quantity}</p>
                                            <button className="plusBtn" onClick={() => addProductQuantity(item.id)}>+ </button>
                                        </div>
                                        <button className="removeBtn" onClick={() => removeItemData(item.id)}>Remove</button>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Plist
