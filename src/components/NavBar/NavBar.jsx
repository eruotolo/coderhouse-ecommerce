import React from 'react';
import CardWidget from '../CardWidget/CardWidget.jsx';
import Logo from '/logo.svg';

const NavBar = () => {
    return (
        <header className="h-[121px]">
            <div className="container">
                <div className="flex items-center justify-between border-b-[1px] border-[#172983] h-[70px]">
                    <div className="w-2/12 flex">
                        <a href="#" className="uppercase text-[12px] text-[#172983]">
                            ¿Necesitas Ayuda?
                        </a>
                    </div>
                    <div className="w-8/12 flex justify-center">
                        <img src={Logo} alt="Logo Pagina" className="h-[45px]" />
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <CardWidget />
                    </div>
                </div>
            </div>
            <div className="container flex items-center justify-center h-[51px]">
                <ul className="flex items-center justify-between">
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1]">
                        MUJERES
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1]">
                        HOMBRES
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1]">
                        ACCESORIOS
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1]">
                        MARCAS
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#d23232] hover:text-[#8e99d1]">
                        SALE
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#d23232] hover:text-[#8e99d1]">
                        OUTLET
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
