import React from 'react';
import ReactDOM from 'react-dom';

import { AllConModal } from './StylesModal'


function Modal({ children }) {
    return ReactDOM.createPortal(
        <AllConModal className="ModalBackground">
            {children}
        </AllConModal>,
        document.getElementById('modal')
    )
}
export default Modal;