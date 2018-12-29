import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Homepage from '../Homepage/Homepage';
import OurStory from '../OurStory/OurStory';
import Wedding from '../Wedding/Wedding';
import Photo from '../Photo/Photo';
import Registry from '../Registry/Registry';

import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <main>
        <Container>
          <Homepage />
          <OurStory />
          <Wedding />
          <Photo />
          <Registry />
        </Container>
      </main>
    )
  }
};
