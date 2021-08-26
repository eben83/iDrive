import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import NavLink from "./NavLink";

const Nav = (props) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen((state) => !state)
    };

    return (
        <>
            <div className="fixed top-0 z-50 flex p-5 bg-white border-b-2 border-black md:items-center">
                <img src='../images/I-Drive-South-Africa-Logoc3a6.jpg' alt='company logo' className='w-1/2 md:w-1/3 lg:w-1/5' />
                <button className="md:hidden" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} className='h-7 w-7 text-indigo-500 absolute right-3 top-5'/>
                </button>
                <nav className={`${isOpen ? 'flex' : 'hidden'} text-white bg-indigo-500 md:bg-white md:text-indigo-500 pl-5 absolute md:pl-0  md:relative top-24 left-0 md:top-0 z-100 flex-col md:flex md:flex-row md:justify-evenly w-full `}>

                    <NavLink href={"/"}
                             isActive={router.pathname === "/"}
                             text={"Home"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>
                    
                    <NavLink href={"/products"}
                             isActive={router.pathname === "/products"}
                             text={"Products"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>

                    <NavLink href={"/sectors"}
                             isActive={router.pathname === "/sectors"}
                             text={"Sectors"}
                             className='py-4 px-0'
                             activeClass={"text-black underline"}
                             hoverClass={"hover:text-blue-500"}/>

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