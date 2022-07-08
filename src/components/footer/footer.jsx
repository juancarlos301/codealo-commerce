import React from "react";
import { AllConFooter, H3 } from "./StylesFooter";

const Footer = ({ darckMode }) => {

    return (
        <AllConFooter darckMode={darckMode}>
            <H3>Work With Us</H3>
            <H3>Terms and Conditions</H3>
            <H3>Help and support</H3>
        </AllConFooter>
    )
}
export default Footer;