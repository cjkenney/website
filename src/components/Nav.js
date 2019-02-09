import React, { Component } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

const Link = styled.a`
  text-decoration: none;
`;

class Nav extends Component {
  render() {
    return (
      <NavContainer>
        Logo
        <Link href="#">About</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </NavContainer>
    );
  }
}

export default Nav;
