import Bottle from "../Bottle/Bottle";
import PropTypes from 'prop-types';


import './Cart.css';


const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            <div className="cart-section">
                {
                    cart.map(bottle => <img src={bottle.img} />)
                }
            </div>
        </div>
    );
};

Cart.PropTypes {
    cart: PropTypes.array.isRequired
}
export default Cart;