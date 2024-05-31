import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);


    // load cart from local storage.
    useEffect(()=>{
        console.log('call the useEffect method', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const saveCart = [];
            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }

            console.log('save cart', saveCart)
            setCart(saveCart);
        }
        
    }, [bottles])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    };

    return (
        <div>
            <h2>Bottles avilable : {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottle-container">
                {bottles.map(bottle => (
                    <Bottle
                        key={bottle.ID}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
