import { FC } from "react"
import { StyledRow } from "./styles";



const Row:FC = (props) =>{
    return <StyledRow className="row">{props.children}</StyledRow>
}


export default Row;