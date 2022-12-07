import styled from "styled-components";
import { Outlet } from "react-router";

export const TitleTop = styled.div `
    height: 100px;
    width: 100x;
    background-color: #34ADB8;
    justify-content: space-between;
    display: flex;
`
export const TitleSite = styled.h1`
    margin-top: 50px;
    margin-left: 60px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20pt;
    color: white;
`
export const NewOutlet = styled(Outlet)`
    display: flex;
    width: 900px;
    height: 100px;
    
`

export const NewMain = styled.main`
    height: auto;
    flex-direction: row;
    background-color: "#80dfb2f";
`;