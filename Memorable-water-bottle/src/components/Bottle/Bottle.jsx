
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { ID, name, img, brand, price, quantity } = bottle;

    return (
        <div className='bottle'>
            <h1>Bottle ID: {ID}</h1>
            <p>{name}</p>
            <img src={img} alt="Bottle Image"/>
            <p>{brand}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;

