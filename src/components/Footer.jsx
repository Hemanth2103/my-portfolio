import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--black);
  text-align: center;
  padding: 1rem 0;
  color: var(--white);
`;

const Footer = () => {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} My Portfolio
    </StyledFooter>
  );
};

export default Footer;