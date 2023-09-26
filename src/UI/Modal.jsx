import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;
