import React, { Component } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  height: 50px;
  width: 100%;
  background: #e0ebe8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #45b29a;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #21564b;
  }
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
