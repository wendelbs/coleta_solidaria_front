import { TextField } from "@mui/material";
import { FormControl } from "react-bootstrap";
import styled from "styled-components";


export const BackCad = styled.div`
  
    padding-top: 35px;
    height: 580px;
`

export const FormCadastro = styled.div`
    
    border-radius: 10px;
    width: 902px;
    height: auto;
    background: #c9df8a;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    opacity: 70%;
`
export const TextFieldCustom = styled(TextField)`
    width: ${props=> props.widthprop?"100px":props.widthprops};
    background-color: ${props=> props.backprop?"green":props.backprops};
    opacity: 90%;
`

export const FormCad = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    padding: 10px;
    
`;