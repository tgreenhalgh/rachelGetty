import React from 'react';
import Social from './Social';
import Links from './Links';
import styled from 'styled-components';

const Div = styled('div')`
  display: flex;
  justify-content: space-evenly;
  background-color: darkmagenta;
  height: 100px;
  padding: 20px;
  color: white;
  font-size: 1.5em;
`;

const Header = () => {
  return (
    <Div>
      Rachel Artenian
      <Links />
      <Social />
    </Div>
  );
};

export default Header;
