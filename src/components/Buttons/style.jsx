import styled from 'styled-components';

export const Button = styled.button`
    font-size: 14px;
    background: ${props => 
    props.inputColor || "white" };
    width: 123px;
    height: 48px;
    border: 0;
    border-color: "white";
    box-sizing: border-box;
    &:hover {
        border-bottom: 3px solid;
        border-color: #620094;  
        height: 51px;
        cursor: pointer;
    };`;
