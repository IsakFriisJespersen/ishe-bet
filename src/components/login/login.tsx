import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React from "react";

export default class Login extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {isOpen: true};
      }
    static getDerivedStateFromProps(props: any, state: any) {
        return {isOpen: props.isOpen };
    }

    render() {
        return (
          <>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button>
       */}
            <LoginModal
              show={true}
            />
          </>
        )

        function LoginModal(props: any) {
            return (
                <Modal
                    show={true}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )
        }
    }
}