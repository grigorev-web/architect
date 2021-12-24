import { FC } from "react"
import { StyledNavMenu } from "./styles";





const NavMenu:FC = (props)=>{
    console.log(props.children)
    return <><StyledNavMenu>{props.children}</StyledNavMenu></>
}

export default NavMenu;