import React, { Component } from 'react';

import './Timeline.css';

export default class Timeline extends Component {
  render() {
    return (
      <div className='timeline'>
        <div className='timeline-container timeline-left'>
          <div className='timeline-content'>
            <h4>5.11.1992</h4>
            <p className='timeline-title'>Austin Chong</p>
            <p className='timeline-location'>Fairfax, Virginia</p>
          </div>
        </div>
        <div className='timeline-container timeline-right'>
          <div className='timeline-content'>
            <h4>10.02.1992</h4>
            <p className='timeline-title'>Pureun Michelle Noh</p>
            <p className='timeline-location'>Seoul, South Korea</p>
          </div>
        </div>
        <div className='timeline-container timeline-left'>
          <div className='timeline-content'>
            <h4>12.26.2010</h4>
            <p className='timeline-title'>FIRST MET</p>
            <p className='timeline-location'>Bridge4Youth Retreat</p>
          </div>
        </div>
        <div className='timeline-container timeline-right'>
          <div className='timeline-content'>
            <h4>6.6.2011</h4>
            <p className='timeline-title'>FIRST DATE</p>
            <p className='timeline-location'>Fairfax Corner, VA</p>
          </div>
        </div>
        <div className='timeline-container timeline-left'>
          <div className='timeline-content'>
            <h4>3.27.2018</h4>
            <p className='timeline-title'>HE PROPOSED</p>
            <p className='timeline-location'>Brooklyn Bridge Park, NY</p>
          </div>
        </div>
        <div className='timeline-container timeline-right'>
          <div className='timeline-content'>
            <h4>4.13.2019</h4>
            <p className='timeline-title'>BEST DAY EVER</p>
            <p className='timeline-location'>Leesburg, VA</p>
          </div>
        </div>
      </div>
    );
  }
};