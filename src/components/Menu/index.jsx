import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons";
import { ItemMenu,  Menu, ListaMenu } from "./style";

export default function MenuTop() {
    return (
      <div>
        
        <Menu>
            <ListaMenu>
                <Link to="/"><ItemMenu><Button text="HOME" /></ItemMenu></Link>
                <Link to="/produtos"><ItemMenu><Button text="PRODUTOS" /></ItemMenu></Link>
                <Link to="/cadastro"><ItemMenu><Button text="CADASTRO" /></ItemMenu></Link>
                <Link to="/instituicoes"><ItemMenu><Button text="INSTITUICOES" /></ItemMenu></Link>
                <Link to="/sobre"><ItemMenu><Button text="SOBRE" /></ItemMenu></Link>
            </ListaMenu> 
        </Menu>
      </div>
    )
    }
