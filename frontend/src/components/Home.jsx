
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Contactus from './Contactus'




export const Home = () => {

  const [productList, setProductList] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch('http://localhost:5000/product/getall');

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    getAllProducts();
  }, [])
  

  const products = [
    {
      id: 1,
      name: 'All In One',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__1101651_pe866465_s5.jpg?f=s',
      price: 699,
    },
    {
      id: 2,
      name: 'Bed',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__1102148_pe866547_s5.jpg?f=s',
      price: 690,
    },
    {
      id: 3,
      name: 'Drawl',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0858102_pe658169_s5.jpg?f=s',
      price: 799,
    },
    {
      id: 4,
      name: 'Drawl',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0858271_pe658946_s5.jpg?f=s',
      price: 690,
    },
    {
    id: 5,
      name: 'Coubard',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0858265_pe658944_s5.jpg?f=s',
      price: 699,
    },
    {
      id: 6,
      name: 'Almirah',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0858553_pe660181_s5.jpg?f=s',
      price: 690,
    },
    {
      id: 7,
      name: 'Bed',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0860901_pe658190_s5.jpg?f=s',
      price: 799,
    },
    {
      id: 8,
      name: 'Almirah',
      image:
        'https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__0858559_pe660182_s5.jpg?f=s',
      price: 690,
    },
 ] 


 const [cartItems, setCartItems] = useState([]);
 const [redirectToCart, setRedirectToCart] = useState(false);
 const navigate = useNavigate();

 const addToCart = (product) => {
   setCartItems((prevItems) => [...prevItems, product]);
   setRedirectToCart(true);
 };

 useEffect(() => {
   if (redirectToCart) {
     navigate('/cartitem', { state: { cartItems } });
   }
 }, [redirectToCart, navigate, cartItems]);

  return (
    <div className='text-center text-muted h2' style={{backgroundColor: 'rgb(160 211 255)'}}>
      Welcome To Home Page
      <p className='p'></p>

      <div className='container'>
        <div className='row'>
          {productList.map((product) => (
            <div className='col-md-3 mb-4' key={product._id}>
              <div className='card'>
                <div className='img-container'>
                  <img className='div-img-top' src={'http://localhost:5000/'+product.image} alt='' />
                </div>
                <div className='card-body'>
              <hr />
                  <p className='fw-bold text-muted fs-2'>{product.brand}</p>
                  <hr />
                  <div className='float-center fs-3'>{product.title}</div>
                  <div className='float-center fs-6'>Year Made:{product.yearMade}</div>
                  <div className='float-center fs-6'>Description:{product.description}</div>
                  <div className='float-center fs-2'>₹{product.price}</div>
                 
                </div>
                <div className='card-footer'>
                  
                  <Link
                    className='btn btn-outline-primary fw-bold'
                    to={'/cartitem/'+product._id}
                  >
                    ✓ Buy Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
     
      <Contactus />
    </div>
  );
  
};

export default Home;