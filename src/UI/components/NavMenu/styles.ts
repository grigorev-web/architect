import styled from "styled-components";



export const StyledNavMenu = styled.div`
    background: linear-gradient(100deg, #141e30, #1b487a);
    position: fixed;
    width: 50px;
    height: 100vh;
    z-index:99;
    color: #fff;
    padding:15px;
    transition: all ease 0.2s;
    & > li {
    color:red;
    }
    &:hover {
        width:300px;
    }

`