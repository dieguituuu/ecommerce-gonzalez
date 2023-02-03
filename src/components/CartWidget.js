import React from 'react';

const CartWidget = () => {
  return (
        <button type="button" className="btn position-absolute">
            <i class="bi bi-cart2 position-absolut top-0 end-0"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span> 
        </button>
  );
}

export default CartWidget;
