import React, {} from 'react';
import Link from 'next/link'

const NavLink = (props) => {
    return (
        <>
            <div onClick={props.onclick}>
                <Link href={props.href} >
                    <a className={`block ${props.className} ${props.hoverClass} ${props.isActive ? props.activeClass : ""}`}>
                        <span>{props.text}</span>
                    </a>
                </Link>
            </div>
        </>
    )
}
export default NavLink;