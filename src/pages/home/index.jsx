import React from "react";
import { ImgCaroussel } from "../../components/carrousel";
import { ContentHome } from "./style";
import {  TitleSite, TitleTop } from "./style";
import MenuTop from "../../components/Menu";

export default function Home() {
    return (
  <>
      <TitleTop>
          <TitleSite>Coleta Solidaria</TitleSite> 
          <MenuTop />
      </TitleTop>
      
      <ContentHome>
        <ImgCaroussel />
      </ContentHome>
  </>
    )
}