import React, { Component } from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  height: 1 vh;
`;

class Intro extends Component {
  render() {
    return (
      <IntroContainer id="intro">
        <h1>Hi, I'm CJ</h1>
        <h2>I'm a web developer from Minneapolis</h2>
      </IntroContainer>
    );
  }
}

export default Intro;
