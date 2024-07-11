import React from 'react';
import CardWidget from '../CardWidget/CardWidget.jsx';
import Logo from '/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

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
                        <Link to="/">
                            <img src={Logo} alt="Logo Pagina" className="h-[45px]" />
                        </Link>
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <CardWidget />
                    </div>
                </div>
            </div>
            <div className="container flex items-center justify-center h-[51px]">
                <ul className="flex items-center justify-between">
                    <li
                        className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1] flex"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        HOMBRES{' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 w-[12px] h-[51px] ml-[5px] "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        {isOpen && (
                            <ul className="block absolute bg-[#FFFFFF] min-w-[160px] p-[16px] z-10 mt-[40px] border-[#ededed] border-[1px]">
                                <li>
                                    <Link to="/category/camisetas">Camisetas</Link>
                                </li>
                                <li>
                                    <Link to="/category/pantalones">Pantalones</Link>
                                </li>
                                <li>
                                    <Link to="/category/chaquetas">Chaquetas</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer text-[#172983] hover:text-[#8e99d1]">
                        MUJERES
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
