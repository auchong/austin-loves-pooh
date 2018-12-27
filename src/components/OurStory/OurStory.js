import React, { Component } from 'react';
import { 
  Row,
  Col } from 'reactstrap';

import './OurStory.css';
import poohBaby from '../../assets/images/pooh_baby.jpg'; 

export default class OurStory extends Component {
  render() {
    return (
      <section id='our-story'>
        <h2 className='text-center'>Our Story</h2>
        <Row>
          <Col sm='12' md='6'>
            <img src={poohBaby} className='img-fluid rounded-circle mx-auto d-block' alt='Baby Pureun' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquet neque, nec varius orci. Mauris sed nisi libero. Phasellus odio mi, consectetur ut neque eu, placerat accumsan elit. Aenean nisi erat, blandit quis tristique sed, vulputate eget eros. Aliquam et feugiat dui. Donec vulputate tortor eget ex posuere mollis. Proin at mi sem.</p>
          </Col>
          <Col sm='12' md='6'>
            <img src={poohBaby} className='img-fluid rounded-circle mx-auto d-block' alt='Baby Austin' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquet neque, nec varius orci. Mauris sed nisi libero. Phasellus odio mi, consectetur ut neque eu, placerat accumsan elit. Aenean nisi erat, blandit quis tristique sed, vulputate eget eros. Aliquam et feugiat dui. Donec vulputate tortor eget ex posuere mollis. Proin at mi sem.</p>
          </Col>
        </Row>
      </section>
    );
  }
};