import React, { Component } from 'react';
import {
  Row,
  Col } from 'reactstrap';

import './Photo.css';

import photoOne from '../../assets/images/photo1.JPG';
import photoTwo from '../../assets/images/photo2.JPG';
import photoThree from '../../assets/images/photo3.JPG';
import photoFour from '../../assets/images/photo4.JPG';
import photoFive from '../../assets/images/photo5.JPG';
import photoSix from '../../assets/images/photo6.JPG';

export default class Photo extends Component {
  render() {
    return (
      <section id='our-photos'>
        <h2 className='text-center'>Our Photos</h2>
        <p className='text-center'>Coming Soon...</p>
        <Row>
          <Col md='4' sm='12'>
            <img src={photoOne} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
          <Col md='4' sm='12'>
          <img src={photoSix} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
          <Col md='4' sm='12'>
          <img src={photoThree} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
        </Row>
        <Row>
          <Col md='4' sm='12'>
          <img src={photoFour} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
          <Col md='4' sm='12'>
          <img src={photoFive} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
          <Col md='4' sm='12'>
          <img src={photoTwo} className='img-fluid engagement-photo' alt='Engagement' />
          </Col>
        </Row>
      </section>
    );
  }
}