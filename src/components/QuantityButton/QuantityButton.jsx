import React, { useState } from 'react';

const QuantityButton = ({ stock }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="border-[1px] border-[#EDEDED] h-[50px] w-[110px] flex justify-center items-center ml-[10px]">
            <button onClick={decrementQuantity} className="ml-[20px] mr-[20px]">
                -
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity} className="ml-[20px] mr-[20px]">
                +
            </button>
        </div>
    );
};

export default QuantityButton;
