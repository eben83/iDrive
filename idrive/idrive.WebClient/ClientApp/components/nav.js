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
            <div className="z-10 sticky top-0 flex flex-wrap flex-row md:justify-between justify-self-center items-center md:space-x-4 relative sm:pb-2">
                <button className="md:hidden w-full h-8 text-blue-600 flex flex-row" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} className='h-7 w-7 text-white absolute right-3 top-68'/>
                </button>
                <nav className={`${isOpen ? 'flex' : 'hidden'} bg-teal-800 pl-5 md:pl-0 absolute md:relative top-8 left-0 md:top-0 z-100 flex-col md:flex md:flex-row md:justify-evenly w-full text-indigo-500`}>

                    <NavLink href={"/"}
                             isActive={router.pathname === "/"}
                             text={"Home"}
                             className='py-4 px-0'
                             activeClass={"text-blue-500 underline"}
                             hoverClass={"hover:text-blue-500"}/>
                    
                    <NavLink href={"/products"}
                             isActive={router.pathname === "/products"}
                             text={"Products"}
                             className='py-4 px-0'
                             activeClass={"text-blue-500 underline"}
                             hoverClass={"hover:text-blue-500"}/>

                    <NavLink href={"/services"}
                             isActive={router.pathname === "/services"}
                             text={"Services"}
                             className='py-4 px-0'
                             activeClass={"text-blue-500 underline"}
                             hoverClass={"hover:text-blue-500"}/>

                    <NavLink href={"/#contact"}
                             isActive={router.pathname === '#contact'}
                             text={"Contact us"}
                             className='py-4 px-0'
                             activeClass={"text-blue-500 underline"}
                             hoverClass={"hover:text-blue-500"}/>

                </nav>
            </div>
        </>
    );
}

export default Nav;