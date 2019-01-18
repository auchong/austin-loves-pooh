import React, { Component } from 'react';
import { 
  Row,
  Col } from 'reactstrap';
import Timeline from '../Timeline/Timeline';

import './OurStory.css';
import austinBaby from '../../assets/images/austin_baby.jpg';
import poohBaby from '../../assets/images/pooh_baby.jpg'; 

export default class OurStory extends Component {
  render() {
    return (
      <section id='our-story'>
        <h2 className='text-center'>Our Story</h2>
        <Row>
          <Col sm='12' md='6'>
            <img src={austinBaby} className='img-fluid rounded-circle mx-auto d-block' alt='Baby Pureun' />
            <p>"On the wedding day, 7 years and 10 months will be the duration of how long we have been dating. It still amazes me that we are actually getting married and that God brought us together for this long. I remember vividly the first day I met Pureun at a retreat during my college years. Pureun and I were in the same small group and I thought to myself, 'She's the cutest girl here. I should try to talk to her.' The whole time I tried to get her to like me, but she would play hard to get the whole time. After that we go on our first date, we decided to go out officially, we go through thick and thin, ups and downs, we get engaged, and now we are getting married. There are so many experiences and memories that we spent together but I'm truly thankful to God for allowing us to now spend the rest of our lives as one. I'm excited to live together as Mrs. and Mr. Chong and thankful that all of you can be a part of it!"</p>
          </Col>
          <Col sm='12' md='6'>
            <img src={poohBaby} className='img-fluid rounded-circle mx-auto d-block' alt='Baby Austin' />
            <p>"I don't really like telling my side of the story because Austin feels so overpowered every time I say it haha but here I go. So, a little back story Austin and I first met at a youth group retreat when we were freshmen in college. We were placed in the same small group. My first impression of him was like, who is this guy thinking he is so cool. He had this "I'm a bad cool boy" look with his gauges. I decided to keep my distance:) All throughout retreat he asked me to sit next to him during the sermons and he sat next to me at meals. On the last day, there was an activity where everyone at retreat had to answer where their dream honeymoon was; me trying be creative said, the moon. Well, woop dee doop, guess who else said the moon, Austin Chong. Anyways, we decided to exchange numbers after retreat and we met up a couple of times. This guy wasn't what I thought he was. He was gentle, caring and had clear plans of his future (oh boy did I not know what I was getting into). I "jjak sarang" him for a good 6 months, midnight calls would make me have butterflies in my stomach and Facebook stalking day after day. And after 6 months he finally asked and that was how it all started..."</p>
          </Col>
        </Row>
        <Timeline />
      </section>
    );
  }
};