import React from 'react';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica';
}
`;

const Container = styled.div`
  /* margin: 0 auto;
  max-width: 600px; */
`;

export default () => (
  <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Test title</title>
      {/* TODO: Fix link */}
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container>
      <Nav />
      <Intro />
      <AboutMe />
    </Container>
  </div>
);
