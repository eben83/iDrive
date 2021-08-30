import React, {useEffect, useRef, useState} from "react";
import _ from "lodash";
import {animateScroll as scroll} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const scrollUpRef = useRef(null)
    const [isScrollUp, setScrollUp] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", _.debounce(handleScroll, 10))
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    const handleScroll = () => {
        if (scrollUpRef.current)
            window.pageYOffset > scrollUpRef.current.getBoundingClientRect().bottom
                ? setScrollUp(true)
                : setScrollUp(false)
    }

    return (
        <>
            <div className={"z-100 absolute top-1/2 h-4 w-8 bg-green-400 invisible"} ref={scrollUpRef}/>

            <div className={`fixed bottom-0 scale-0 opacity-0 right-3 w-12 h-11 pt-1 rounded cursor-pointer bg-indigo-700 overflow-hidden text-center items-center text-3xl z-100 text-white transition transition-all duration-500 ease-in-out ${isScrollUp ? "bottom-6 opacity-100 scale-100" : ""}`}
                 onClick={() => scroll.scrollToTop({ duration: 2000})}>
                <FontAwesomeIcon icon={faAngleUp} className={"text-white right-3 w-12 h-11"}/>
            </div>
        </>
    )
}
export default ScrollToTop;