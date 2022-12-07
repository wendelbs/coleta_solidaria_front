import styled from "styled-components";

export const TextBox = styled.input`
    opacity: 70%;
    color: "black";
    height: 50px;
    width: ${props=> props.widthprop?"100px":props.widthprops};
    background-color: ${props=> props.background?"100px":props.backgrounds};
    border-radius: 5px 5px 0 0;
    transition: 0.2s ease-out;
    padding: 15px;
    border-color: green;
    border-bottom-width: 2px ;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    margin-top: 10px;
    z-index: -1;
   
    &:hover {
        opacity: 100%;
        border: 0 0 2px 0;
        transition: 0.2s ease-in;
        border-color: #1a0004;
        };
 
    &:focus {
        outline: 0;
        padding: 15px;
    }
    
`
export const LabelText = styled.div`
    display:float;
    flex-direction: column;
    padding-top: 13px;
    font-size: 15pt;
    margin-left: 10px;
    position: absolute;
    z-index: 1;
    &:hover {
        font-size: 10pt;
    }
`;