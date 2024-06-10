import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuantityButton from '../QuantityButton/QuantityButton.jsx';

const ItemDetail = ({ nombre, precio, img, stock, categoria, descripcion }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="grid grid-cols-2 mt-[60px]">
            <div className="col-span-1 flex justify-end">
                <img
                    src={img}
                    alt="Prenda de Vestir"
                    className="h-[650px] w-[550px] object-cover"
                />
            </div>
            <div className="col-span-1 flex flex-col items-start pl-[30px]">
                <h1 className="text-[24px] leading-[30px] font-bold text-[#333333] ">{nombre}</h1>

                <p className="text-[12px] leading-[25px] text-[#999999] capitalize">
                    Categoría: <span className="font-medium">{categoria}</span>
                </p>

                <div className="flex">
                    <p className="text-[#172983] font-[700] text-[22px] leading-[25px] my-[20px]">
                        <span className="text-[20px] font-medium">$</span>{' '}
                        {(precio * 0.8).toFixed(2)}
                    </p>
                    <p className="text-[16px] leading-[25px] text-[rgb(153,153,153)] my-[20px] ml-[20px] line-through">
                        $ {precio.toFixed(2)}
                    </p>
                    <p className="bg-[#D23232] my-[20px] ml-[20px] text-[12px] leading-[28px] text-[#ffffff] px-[10px]">
                        ¡Ahorrá un 20%!
                    </p>
                </div>

                <div className="flex mb-[20px]">
                    <img
                        src="/bbva.webp"
                        alt="bbva"
                        className="h-[18px] w-[54px] mt-[4px] ml-[-7px] mr-[10px]"
                    />
                    <p className="text-[16px] leading-[25px] font-[700] text-[#172983]">
                        <span className="font-medium text-[14px]">$</span>{' '}
                        {(precio * 0.2).toFixed(2)}
                    </p>
                </div>

                <p className="text-[13px] leading-[25px] text-[#555555] mb-[20px]">{descripcion}</p>

                <p className="font-[700] text-[12px] leading-[20px] mb-[5px]">Talle:</p>

                <ul className="flex">
                    <li className="text-[12px] leading-[12px] text-[#333333] border-[1px] border-[#EDEDED] px-[10px] py-[8px] mr-[10px] cursor-pointer hover:bg-[#333333] hover:text-[#ffffff]">
                        S
                    </li>
                    <li className="text-[12px] leading-[12px] text-[#333333] border-[1px] border-[#EDEDED] px-[10px] py-[8px] mr-[10px] cursor-pointer hover:bg-[#333333] hover:text-[#ffffff]">
                        M
                    </li>
                    <li className="text-[12px] leading-[12px] text-[#333333] border-[1px] border-[#EDEDED] px-[10px] py-[8px] mr-[10px] cursor-pointer hover:bg-[#333333] hover:text-[#ffffff]">
                        L
                    </li>
                    <li className="text-[12px] leading-[12px] text-[#333333] border-[1px] border-[#EDEDED] px-[8px] py-[8px] mr-[10px] cursor-pointer hover:bg-[#333333] hover:text-[#ffffff]">
                        XL
                    </li>
                </ul>

                <div className="flex mt-[40px]">
                    <Link
                        to="/"
                        className="border-[1px] border-[#EDEDED] h-[50px] w-[50px] flex justify-center items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 hover:text-[#D23232] cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>
                    </Link>

                    <QuantityButton stock={stock} />

                    <Link
                        to="/"
                        className="border-[1px] border-[#EDEDED] h-[50px] w-[250px] flex justify-center items-center text-[16px] bg-[#172983] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff] ml-[10px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 mr-[5px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        COMPRAR
                    </Link>
                </div>

                <div className="flex border-t-[1px] border-b-[1px] border-[#EDEDED] mt-[30px] h-[50px] w-[70%] items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                    </svg>
                    <p
                        className="text-[12px] font-bold text-[#333333] ml-[10px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        MÉTODOS Y COSTOS DE ENVÍO
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ml-[210px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <div className="mt-[5px] flex flex-col items-start transition-shadow">
                        <p className="text-[#333333] text-[12px] font-bold">DAC:</p>
                        <p className="text-[#333333] text-[11px] font-normal">
                            Envío sin costo en compras mayores a $ 2.000 | Costo normal: $ 200.
                        </p>
                    </div>
                )}

                <p className="font-[700] text-[12px] leading-[20px] mb-[5px] mt-[30px]">
                    CARACTERÍSTICAS
                </p>
                <div className="flex border-t-[1px] border-b-[1px] border-[#EDEDED] h-[50px] w-[70%] items-center">
                    <p className="text-[#555555] text-[12px] font-normal leading-[20px]">
                        Cantidad en Stock: <span className="font-bold ml-[40px]">{stock}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
