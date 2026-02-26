import React from 'react';
import styled from 'styled-components';
import profPic from '../profpic_unc.jpg';

const ProfilePicWrapper = styled.div`
  flex-shrink: 0;
  width: 280px;

  @media screen and (max-width: 768px) {
    width: 60%;
    max-width: 240px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 3px 6px 6px 0 black;
  display: block;
`;

export const ProfilePic = () => (
  <ProfilePicWrapper>
    <ProfileImage src={profPic} alt="Ron Joshi" />
  </ProfilePicWrapper>
);
