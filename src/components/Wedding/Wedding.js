import React, { Component } from 'react';
import {
  Row,
  Col } from 'reactstrap';

import './Wedding.css';
import venue from '../../assets/images/venue.jpg'; 

export default class Wedding extends Component {
  render() {
    return (
      <div id='wedding'>
        <h2 className='text-center'>Our Wedding</h2>
        <Row>
          <Col md='7'>
            <div className='wedding-text'>
              <p><strong>48 Fields</strong></p>
              <p>43372 Spinks Ferry Rd, Leesburg, VA 20176</p>
              <p className='ceremony-text'>Ceremony will start at 4pm, followed by dinner and reception</p>
            </div>
          </Col>
          <Col md='5'>
            <img src={venue} className='img-fluid img-thumbnail' alt='Venue' />
          </Col>
        </Row>
      </div>
    );
  }
};