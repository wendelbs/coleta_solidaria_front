import React from "react";
import MenuTop from "../../components/Menu";

import {  NewMain, NewOutlet, TitleSite, TitleTop } from "./style";


export  default function Layout() {
    return (
  
        <NewMain>
            <TitleTop>
                <TitleSite>Coleta Solidaria</TitleSite> 
                <MenuTop />
            </TitleTop>
            <NewOutlet />
         
        </NewMain>
    
        
    )
}