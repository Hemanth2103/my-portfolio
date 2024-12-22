import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: var(--black);
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--white);
    text-decoration: none;
    margin: 0 1rem;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </StyledNavbar>
  );
};

export default Navbar;