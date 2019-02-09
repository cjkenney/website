import React from 'react';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}
`;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
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
    <Nav />
    <Container>
      <Intro />
    </Container>
  </div>
);
