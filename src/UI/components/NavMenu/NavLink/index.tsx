import React, { FC } from "react";

interface INavLink{
    label:string;
    path?: string;
    element?: React.ReactElement;
    icon?:React.ReactElement;
}


const NavLink:FC<INavLink> = (props)=>{
    return <div>NavLInk</div>
}

export default NavLink;