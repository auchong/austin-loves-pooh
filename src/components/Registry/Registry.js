import React, { Component } from 'react';

import './Registry.css';

export default class Registry extends Component {
  render() {
    return (
      <section id='registry' className='text-center'>
        <h2>Our Registry</h2>
        <p style={{'marginBottom': '0'}}>Amazon</p>
        <a href='https://www.amazon.com/wedding/austin-chong-michelle-noh-leesburg-april-2019/registry/7GPMPKRZU8O0' target='_blank' rel="noopener noreferrer" style={{'fontSize': '20px'}}>View our Registry</a>
        <p style={{'marginBottom': '0', 'marginTop': '10px'}}>Zola</p>
        <a href='https://www.zola.com/registry/austinlovespureun' target='_blank' rel="noopener noreferrer" style={{'fontSize': '20px'}}>View our Registry</a>
      </section>
    );
  }
};