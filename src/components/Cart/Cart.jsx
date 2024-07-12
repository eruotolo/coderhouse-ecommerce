import React, { useContext } from 'react';
import Context from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context);
    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    console.log('Carrito', cart);

    return (
        <div className="mt-[60px]">
            <div className="flex justify-between mb-[20px]">
                <h1 className="text-left mb-[30px] font-medium text-[26px]">
                    Carro <b className="font-light text-[20px]">({totalItems} Productos)</b>
                </h1>
                <button
                    onClick={() => clearCart()}
                    className="border-[1px] border-[#EDEDED] h-[50px] w-[210px] flex justify-center items-center text-[16px] bg-[#D23232] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff] mt-[20px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 w-[18px] mr-[5px]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                    </svg>
                    Vaciar Carrito
                </button>
            </div>

            <div className="grid grid-cols-3 ">
                {cart.length === 0 ? (
                    <div className="col-span-2 h-[300px] shadow py-[16px] px-[22px] rounded-[10px] mr-[20px] flex justify-center items-center align-middle">
                        <h1 className="text-[24px] font-medium">Tu carrito está vacío.</h1>
                    </div>
                ) : (
                    <div className="col-span-2 shadow py-[16px] px-[22px] rounded-[10px] mr-[20px]">
                        <div className="flex mb-[10px]">
                            <div className="w-[50%] text-[15px] text-left font-medium">
                                Nombre del Producto
                            </div>
                            <div className="w-[5%] text-[16px] font-medium">Cantidad</div>
                            <div className="w-[20%] text-[16px] font-medium">Precio</div>
                            <div className="w-[20%] text-[16px] font-medium">Sub Total</div>
                            <div className="w-[5%]"></div>
                        </div>
                        {cart.map((prod) => (
                            <div className="flex" key={prod.id}>
                                <div className="w-[50%] h-[40px] items-center justify-end text-[15px] text-left">
                                    {prod.nombre}
                                </div>
                                <div className="w-[5%] h-[40px] items-center justify-end text-[15px]">
                                    {prod.quantity}
                                </div>
                                <div className="w-[20%] h-[40px] items-center justify-end text-[15px]">
                                    $ {prod.precio}
                                </div>
                                <div className="w-[20%] h-[40px] items-center justify-end text-[15px]">
                                    $ {prod.quantity * prod.precio}
                                </div>
                                <div className="w-[5%]">
                                    <button onClick={() => removeItem(prod.id)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-6 w-[18px]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="col-span-1 shadow py-[16px] px-[22px] rounded-[10px] ml-[10px]">
                    <div className="flex justify-between h-[50px] border-b-[1px] border-[rgb(225, 225, 225)] items-center ">
                        <h1 className="font-medium text-[16px]">Productos ({totalItems})</h1>
                        <h1 className="font-light text-[15px]">${getTotal()}</h1>
                    </div>
                    <div className="flex justify-between h-[50px] border-b-[1px] border-[rgb(225, 225, 225)] items-center ">
                        <h1 className="font-medium text-[16px]">Envio</h1>
                        <h1 className="font-light text-[15px]">Gratis</h1>
                    </div>
                    <div className="flex justify-between h-[50px] items-center ">
                        <h1 className="font-medium text-[16px]">Total</h1>
                        <h1 className="font-light text-[15px]">${getTotal()}</h1>
                    </div>
                    <div className="flex items-center h-[50px] justify-center mt-[30px]">
                        <Link
                            to=""
                            className="border-[1px] border-[#EDEDED] h-[50px] w-[250px] flex justify-center items-center text-[16px] bg-[#172983] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff] ml-[10px]"
                        >
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
