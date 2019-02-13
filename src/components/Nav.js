import React, { Component } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
      <Navbar>
        CJ Kenney
        <Link href="#">About</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </Navbar>
    );
  }
}

export default Nav;
