import React, { Component } from 'react';

import './Timeline.css';

export default class Timeline extends Component {
  render() {
    return (
      <div class='timeline'>
        <div class='timeline-container timeline-left'>
          <div class='timeline-content'>
            <h4>December 2010</h4>
            <hr />
            <p>Pureun and Austin first meet at Bridge Retreat</p>
          </div>
        </div>
        <div class='timeline-container timeline-right'>
          <div class='timeline-content'>
            <h4>June 2011</h4>
            <hr />
            <p>Austin asks Pureun if she would go out with him</p>
          </div>
        </div>
        <div class='timeline-container timeline-left'>
          <div class='timeline-content'>
            <h4>March 2019</h4>
            <hr />
            <p>Austin asks Pureun if she will marry him and she says YES!</p>
          </div>
        </div>
        <div class='timeline-container timeline-right'>
          <div class='timeline-content'>
            <h4>April 2019</h4>
            <hr />
            <p>Pureun and Austin get married happily ever after</p>
          </div>
        </div>
      </div>
    );
  }
};