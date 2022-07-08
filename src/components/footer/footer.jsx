import React from "react";
import { AllConFooter, H3 } from "./StylesFooter";

const Footer = ({ darckMode }) => {

    return (
        <AllConFooter darckMode={darckMode}>
            <H3>Trabaja con nosotros</H3>
            <H3>Términos y condiciones</H3>
            <H3>Ayuda y asistencia</H3>

        </AllConFooter>
    )
}
export default Footer;