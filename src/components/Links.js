import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyLinks = styled('div')``;

const StyledLink = styled(Link)`
  padding-left: 10px;
`;

const Links = () => (
  <ul>
    <MyLinks>
      <StyledLink to="/">
        <Button color="primary">Home</Button>
      </StyledLink>
      <StyledLink to="/tours">
        <Button color="primary">Tours</Button>
      </StyledLink>
      <StyledLink to="/kouros">
        <Button color="primary">Kouros on PCH</Button>
      </StyledLink>
    </MyLinks>
  </ul>
);

export default Links;
