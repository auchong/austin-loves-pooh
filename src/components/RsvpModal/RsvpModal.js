import React, { Component } from 'react';
import {
  Alert,
  Button,
  InputGroup,
  Input, 
  InputGroupAddon,
  Modal, 
  ModalHeader, 
  ModalBody } from 'reactstrap';

export default class RsvpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCode: '',
      isError: false
    };
  };

  rsvpInputHandler = (e) => {
    this.setState({
      inputCode: e.target.value
    });
  };

  rsvpButtonHandler = () => {
    const RSVP_CODE = '04132019';

    if (this.state.inputCode !== RSVP_CODE) {
      this.setState({isError: true});
    } else {
      this.setState({isError: false});

      this.props.toggleModal();
      window.open('https://goo.gl/forms/AXQu0jUSGaMU7hx43', '_blank');
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} centered>
        <ModalHeader toggle={this.props.toggleModal}></ModalHeader>
        <ModalBody>
          {this.state.isError ? <Alert color='danger'>Incorrect code. Please try again.</Alert> : null}
          <p>Please enter the code on your invitation to access the Google Form that you will need to complete to RSVP.</p>
          <InputGroup>          
            <Input placeholder='Enter the code here' onChange={this.rsvpInputHandler} />
            <InputGroupAddon addonType="append">
              <Button onClick={this.rsvpButtonHandler}>Submit</Button>
            </InputGroupAddon>          
          </InputGroup>
        </ModalBody>
      </Modal>
    );
  }
};