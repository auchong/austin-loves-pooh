import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <div className='madeWithLove text-center'>
          Made with <span role='img' aria-label='Heart Emoji'>️️️❤️</span>by Austin for my beautiful bride
        </div>
      </footer>
    );
  }
};