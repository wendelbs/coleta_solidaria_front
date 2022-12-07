import React from "react";
import { LabelText, TextBox } from "./style";

export default function TextBoxArea({sizew, textplace, back}) {
    return (
    <div>
        <LabelText>
            <TextBox widthprops={sizew} placeholder={textplace} backgrounds={back}/>
        </LabelText>
    </div>
   )
}