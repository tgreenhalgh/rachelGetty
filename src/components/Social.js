import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const SocialContainer = styled('ul')`
  float: right;
`;

const Icons = styled('li')`
  margin-right: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
  display: inline-block;
  & > a {
    color: #fff;
  }
  & > a:hover {
    color: #11abb0;
  }
`;

const Social = () => (
  <SocialContainer>
    <Icons>
      <a
        href="http://www.facebook.com/rartenian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
    </Icons>
    <Icons>
      <a
        href="http://www.twitter.com/rartenian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </Icons>
    <Icons>
      <a
        href="http://www.instagram.com/rartenian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </Icons>
  </SocialContainer>
);

export default Social;
