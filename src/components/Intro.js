import React, { Component } from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  height: 100vh;
  background-color: #e0ebe8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #45b29a;
`;

const HeadingDescription = styled.h1`
  font-size: 2rem;
  color: #45b29a;
`;

class Intro extends Component {
  render() {
    return (
      <IntroContainer id="intro">
        <Heading>Hi, I'm CJ</Heading>
        <HeadingDescription>
          I'm a web developer from Minneapolis
        </HeadingDescription>
      </IntroContainer>
    );
  }
}

export default Intro;
