import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import checkOut from './CheckOut';


const CartPage = () => {

  const [productData, setProductData] = useState(null);

  const {id} = useParams();

  const getProductData = async () => {
    const res = await fetch('http://localhost:5000/product/getbyid/'+id);

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setProductData(data);
  }

  useEffect(() => {
    getProductData();
  }, [])
  
  // const productList=[productData];

  const handleCheckout = () => {
    // Store the selected product in the local storage
    const cartItems = productData !== null ? [productData] : [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  if (productData === null) {
    return (
      <div className="text-center fs-3">
        Your Cart is Empty
        <Link to="/">Go Back to Home</Link>
      </div>
    );
  } else {
    return (
      <div className="text-center fs-2">
        Cart
        <hr />
         <div className='container'>
         <div className='card'>
                <div className='img-co  ntainer'>
                  <img className='div-img-top' src={'http://localhost:5000/'+productData.image} alt='' />
                </div>
                <div className='card-body'>
              <hr />
                  <p className='fw-bold text-muted fs-5'>{productData.brand} </p>
                  <hr />
                  <div className='fs-3'> {productData.title}</div>
                  <div className='float-center fs-6'>Year Made:{productData.yearMade}</div>
                  <div className='float-center fs-6'>Description:{productData.description}</div>
                  <div className='float-center fs-2'>₹{productData.price}</div>
                 
                </div>
                
              </div>
      </div>
         
        <Link
                    className='btn btn-outline-primary fw-bold'
                    to={'/checkout/'+id}
                  >
                    Check Out</Link>
        <br />
        <br />
        <Link to="/">Go Back to Home</Link>
      </div>
    );
  }

};

export default CartPage;
