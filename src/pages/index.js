import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Test title</title>
      {/* TODO: Fix link */}
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
  </Container>
);
