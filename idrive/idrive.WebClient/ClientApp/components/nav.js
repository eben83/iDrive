import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import NavLink from "./NavLink";
import { NavbarBrand} from 'reactstrap';

const Nav = (props) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false)
    const [isSectorOpen, setIsSectorOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen((state) => !state)
    };
    
    return (
        <>
            <div className="fixed top-0 z-50 flex p-5 bg-white border-b-2 border-black md:items-center">
                <NavbarBrand href='/' className='w-1/2 md:w-1/3 lg:w-1/5'>
                    <img src='../images/I-Drive-South-Africa-Logoc3a6.jpg' alt='company logo'  />
                </NavbarBrand>
                <button className="md:hidden" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} className='h-7 w-7 text-indigo-500 absolute right-3 top-5'/>
                </button>
                <nav className={`${isOpen ? 'flex' : 'hidden'} text-white bg-indigo-500 h-screen md:h-auto md:pb-0 md:bg-white md:text-indigo-500 pl-5 absolute md:pl-0  md:relative top-24 left-0 md:top-0 z-100 flex-col md:flex md:flex-row md:justify-evenly w-full `}>

                    <NavLink href={"/"}
                             isActive={router.pathname === "/"}
                             text={"Home"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>
                    
                    <div className='relative'>
                        <div onClick={() => setIsProductOpen(!isProductOpen)} className='cursor-pointer py-4 px-0 hover:text-blue-500'>
                            Products
                        </div>
                        <ul className={`${isProductOpen ? 'visible' : 'invisible'} z-10 absolute top-12 bg-indigo-500 md:border-black md:border-2 md:bg-white md:w-40 md:px-5 md:pb-5 left-0 flex flex-col `}>
                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive E3"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive P2"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive Eco Pump"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive Eco"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive Elevator"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Optidrive P2 Solar"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>
                        </ul>
                    </div>

                    <div className='relative'>
                        <div onClick={() => setIsSectorOpen(!isSectorOpen)} className='cursor-pointer py-4 px-0 hover:text-blue-500'>
                            Sectors
                        </div>
                        <ul className={`${isSectorOpen ? 'visible' : 'invisible'} absolute top-12 bg-indigo-500 md:border-black md:border-2 md:bg-white md:w-40 md:px-5 md:pb-5 left-0 flex flex-col `}>
                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Pump Control"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Building Services"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Elevators"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"General Automation"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Marin Equipment Control"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Combustion Air Fan Control"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>

                            <NavLink href={"/"}
                                     isActive={router.pathname === "/"}
                                     text={"Solar"}
                                     className='py-1 px-0'
                                     activeClass={"text-black underline"}
                                     hoverClass={"hover:text-blue-500"}/>
                        </ul>
                    </div>

                    <NavLink href={"/#about"}
                             isActive={router.pathname === "#about"}
                             text={"About"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>

                    <NavLink href={"/#contact"}
                             isActive={router.pathname === '#contact'}
                             text={"Contact us"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>

                </nav>
            </div>
        </>
    );
}

export default Nav;