import React from "react";
import { Button } from "./style";


export default function Buttons({text}) {
    return (
        <Button primary> {text}</Button>
    )
};