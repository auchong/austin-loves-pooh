import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './Homepage.css';
import homepageImage from '../../assets/images/homepage.png'; 
import RsvpModal from '../RsvpModal/RsvpModal';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  };

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <section id='homepage'>
         <h1 className='text-center'>Pureun &amp; Austin</h1>
          <img src={homepageImage} className='img-fluid' alt='Engagement couple' /> 
          <div className='homepage-text text-center'>
            <p>Please join us for our wedding celebration on</p>
            <p>April 13, 2019</p>
            <Button className='rsvp-btn' onClick={this.toggle}>RSVP</Button>
          </div>
        <RsvpModal isModalOpen={this.state.isModalOpen} toggleModal={this.toggle}></RsvpModal>
      </section>
    )
  }
};