import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCaretDown, faCaretUp, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import NavLink from "./NavLink";
import { NavbarBrand } from 'reactstrap';

const Nav = (props) => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false)
    const [sectorDropdown, setSectorDropdown] = useState(false)

    const toggleNav = () => {
        setIsOpen((state) => !state)
    };
    
    const clickClose = () => {
        setIsOpen(false)
    }
    const handleProduct = () => {
        if(sectorDropdown) {
            setSectorDropdown(false)
            setProductDropdown(!productDropdown)
        } else {
            setProductDropdown(!productDropdown)
        }
    }
    const handleSector = () => {
        if(productDropdown) {
            setProductDropdown(false)
            setSectorDropdown(!sectorDropdown)
        } else {
            setSectorDropdown(!sectorDropdown)
        }
    }
    
    const onMouseEnterProduct = () => {
        if(window.innerWidth < 960) {
            setProductDropdown(false)
        } else {
            setProductDropdown(true)
        }
    }

    const onMouseLeaveProduct = () => {
        if(window.innerWidth < 960) {
            setProductDropdown(false)
        } else {
            setProductDropdown(false)
        }
    }

    const onMouseEnterSector = () => {
        if(window.innerWidth < 960) {
            setSectorDropdown(false)
        } else {
            setSectorDropdown(true)
        }
    }

    const onMouseLeaveSector = () => {
        if(window.innerWidth < 960) {
            setSectorDropdown(false)
        } else {
            setSectorDropdown(false)
        }
    }

    const products = [
        {id: '1', title: 'Optidrive E3', path: '/optidrive-e3'},
        {id: '2', title: 'Optidrive P2', path: '/optidrive-p2'},
        {id: '3', title: 'Optidrive Eco Pump', path: '/'},
        {id: '4', title: 'Optidrive Eco', path: '/'},
        {id: '5', title: 'Optidrive Elevator', path: '/'},
        {id: '6', title: 'Optidrive P2 Solar', path: '/'},
    ]
    
    const sectors = [
        {id: '1', title: 'Pump Control', path: '/'},
        {id: '2', title: 'Building Services', path: '/'},
        {id: '3', title: 'Elevators', path: '/'},
        {id: '4', title: 'General Automation', path: '/'},
        {id: '5', title: 'Marine Equipment Control', path: '/'},
        {id: '6', title: 'Combustion Air Fan Control', path: '/'},
        {id: '7', title: 'Solar', path: '/'},
    ]
    
    return (
        <>
            <div className="fixed top-0 z-50 flex p-5 bg-white shadow md:items-center">
                <NavbarBrand href='/' className='w-1/2 md:w-1/3 lg:w-1/5'>
                    <img src='../images/I-Drive-South-Africa-Logoc3a6.jpg' alt='company logo'  />
                </NavbarBrand>
                <button className="md:hidden" onClick={toggleNav}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='h-7 w-7 text-indigo-500 absolute right-3 top-5'/>
                </button>
                <nav className={`${isOpen ? 'flex' : 'hidden'} z-100 text-white bg-indigo-500 h-screen md:h-auto md:pb-0 md:bg-white md:text-indigo-500 pl-5 absolute md:pl-0  md:relative top-24 left-0 md:top-0 z-100 flex-col md:flex md:flex-row md:justify-evenly w-full `}>

                    <NavLink href={"/"}
                             isActive={router.pathname === "/"}
                             text={"Home"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}
                             onclick={clickClose}
                    />
                    
                    <ul >
                        <li onClick={handleProduct} className='nav-item flex py-4 px-0 cursor-pointer relative z-40' onMouseEnter={onMouseEnterProduct} onMouseLeave={onMouseLeaveProduct}>
                            Products
                            <FontAwesomeIcon icon={productDropdown ? faCaretUp : faCaretDown} className='h-7 w-7 sm:text-white md:text-indigo-500 '/>
                            <ul  className={`${productDropdown ? 'visible' : 'invisible'} absolute top-12 bg-indigo-500 md:w-40 flex flex-col items-center md:bg-indigo-100 md:text-indigo-500`}>
                                {products .map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink href={item.path}
                                                     isActive={router.pathname === item.path}
                                                     text={item.title}
                                                     className='py-4 px-0'
                                                     activeClass={"text-black underline"}
                                                     hoverClass={"hover:text-blue-500"}
                                                     onclick={clickClose}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>

                    <ul >
                        <li onClick={handleSector} className='nav-item flex py-4 px-0 cursor-pointer relative' onMouseEnter={onMouseEnterSector} onMouseLeave={onMouseLeaveSector}>
                            Sectors
                            <FontAwesomeIcon icon={sectorDropdown ? faCaretUp : faCaretDown} className='h-7 w-7 sm:text-white md:text-indigo-500 '/>
                            <ul  className={`${sectorDropdown ? 'visible' : 'invisible'} absolute top-12 bg-indigo-500 md:w-64 flex flex-col items-center md:bg-indigo-100 md:text-indigo-500`}>
                                {sectors .map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink href={item.path}
                                                     isActive={router.pathname === item.path}
                                                     text={item.title}
                                                     className='py-4 px-0'
                                                     activeClass={"text-black underline"}
                                                     hoverClass={"hover:text-blue-500"}
                                                     onclick={clickClose}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>

                    <NavLink href={"/#about"}
                             isActive={router.pathname === "#about"}
                             text={"About"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}
                             onclick={clickClose}
                    />

                    <NavLink href={"/#contact"}
                             isActive={router.pathname === '#contact'}
                             text={"Contact us"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}
                             onclick={clickClose}
                    />

                </nav>
            </div>
        </>
    );
}

export default Nav;