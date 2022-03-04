import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa'

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +52 664-794-2947'>Click here to call me</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:kalarboleda97@gmail.com'>Click here to send me an email</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>'Creating ideas that innovate the world'.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href='https://github.com/KevL97t'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://www.linkedin.com/in/kevin-a-a20122206/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://www.beholdtheblog.com/'>
            <FaBlogger size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
