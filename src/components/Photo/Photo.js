import React, { Component } from 'react';
import {
  Row,
  Col } from 'reactstrap';

import './Photo.css';

export default class Photo extends Component {
  render() {
    return (
      <section id='our-photos'>
        <h2 className='text-center'>Our Photos</h2>
        <p className='text-center'>Coming Soon...</p>
        <Row>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
        </Row>
        <Row>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
          <Col md='4' sm='12'>
            <div className='sample-image'></div>
          </Col>
        </Row>
      </section>
    );
  }
}