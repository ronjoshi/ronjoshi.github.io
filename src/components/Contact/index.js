import React, { useEffect } from 'react';
import { Wrapper, Column } from '../Wrappers';
import {
  ContactButton,
  StyledLinkedin,
  StyledGithub,
  StyledEmail,
  ButtonContainer
} from './ContactElements';
import WebFont from 'webfontloader';

const Contact = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'Roboto']
      }
    });

    window.scrollTo(0, 0);
    document.title = 'Contact | Ron Joshi';
  }, []);

  return (
    <Wrapper>
      <Column>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me through any of the following channels:
        </p>
        <p>
          <strong>Email:</strong> ronitjoshi@gmail.com
        </p>

        <ButtonContainer>
          <ContactButton
            href="https://www.linkedin.com/in/ronjoshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkedin />
            LinkedIn
          </ContactButton>

          <ContactButton
            href="https://github.com/ronjoshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithub />
            GitHub
          </ContactButton>

          <ContactButton
            href="mailto:ronitjoshi@gmail.com"
          >
            <StyledEmail />
            Email
          </ContactButton>
        </ButtonContainer>
      </Column>
    </Wrapper>
  );
};

export default Contact;
