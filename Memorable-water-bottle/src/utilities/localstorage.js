

const getStoredCart = () => {
    const setStoredCart = localStorage.getItem('cart');
    if (setStoredCart) {
        return JSON.parse(setStoredCart);
    }
    return [];
};

const saveCartToLocalStorage = cart => {
    const cartStringfyField = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfyField);
};

const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    //save to local storage
    saveCartToLocalStorage(cart);
};

export{getStoredCart, addToLocalStorage}