import React, { FC } from "react";

interface INavLink{
    path: string;
    element: React.ReactElement;
    item:string;
    icon?:React.ReactElement;
}


const NavLink:FC<INavLink> = (props)=>{
    return <div>NavLInk</div>
}

export default NavLink;