import React from "react";
import {Button, Modal} from "react-bootstrap"

const AlertModal = (props) => {
    
    return(
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text passes the 750 character limit!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AlertModal;