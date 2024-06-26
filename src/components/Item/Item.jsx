import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ nombre, precio, img, id }) => {
    return (
        <div className="flex flex-col bg-white max-w-md mx-auto w-[270px] mb-[40px]">
            <div className="flex-shrink-0">
                <Link to={`/product/${id}`}>
                    <img
                        className="h-[360px] w-[270px] object-cover cursor-pointer"
                        src={img}
                        alt={nombre}
                    />
                </Link>
            </div>
            <div className="pt-2">
                <Link to={`/product/${id}`}>
                    <h1 className="text-[14px] font-[700] leading-[20px] text-left cursor-pointer h-[36px]">
                        {nombre}
                    </h1>
                </Link>
            </div>
            <div className="py-1">
                <p className="text-left text-[#172983] text-[13px] font-[700]">$ {precio}</p>
            </div>
            <div className="flex">
                <img src="/bbva.webp" alt="bbva" className="h-[14px] w-[45px] mt-[2px] ml-[-7px]" />
                <p className="text-[12px] text-[#054279]">20% de descuento</p>
            </div>
        </div>
    );
};

export default Item;
