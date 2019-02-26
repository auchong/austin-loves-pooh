import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Photos from '../../data/photos';

import './Photo.css';

export default class Photo extends Component {
  render() {
    return (
      <section id='our-photos'>
        <h2 className='text-center'>Our Photos</h2>
        <Gallery photos={Photos} />
      </section>
    );
  }
}