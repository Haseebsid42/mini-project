import React from 'react';

const Checkout = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Checkout</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center fs-3">
                {item.title}
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <hr />
          <h4 className="text-end">Total: ₹{totalPrice}</h4>
          <button className="btn btn-primary w-100 mt-3">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
