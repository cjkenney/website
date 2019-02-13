import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAboutMe = styled.section`
  height: 700px;
`;

class AboutMe extends Component {
  render() {
    return <StyledAboutMe>About Me</StyledAboutMe>;
  }
}

export default AboutMe;
