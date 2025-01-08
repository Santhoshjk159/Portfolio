import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #121212;
  color: #f1f1f1;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 2px solid #333;

  @media (min-width: 768px) {
    text-align: left;
    padding: 3rem 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Link = styled.a`
  color: #bbb;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #f1f1f1;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    &.github:hover {
      color: #818589;
    }

    &.linkedin:hover {
      color: #0077b5;
    }

    &.instagram:hover {
      color: #ff69b4;
    }

    &.discord:hover {
      color: #7289da;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Column 1 */}
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
          <Link href="/skills">Skills</Link>
        </Column>

        {/* Column 2 */}
        <Column>
          <ColumnTitle>Contact</ColumnTitle>
          <p>Email: jksanthosh159@gmail.com</p>
          <p>Location: Trichy,Tamilnadu,India</p>
        </Column>

        {/* Column 3 */}
        <Column>
          <ColumnTitle>Follow Me</ColumnTitle>
          <SocialIcons>
            <a
              href="https://github.com/Santhoshjk159"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jksanthosh159/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/j_k_santhosh/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.com/users/santhoshjk159"
              target="_blank"
              rel="noopener noreferrer"
              className="discord"
            >
              <FaDiscord />
            </a>
          </SocialIcons>
        </Column>
      </FooterContent>

      <FooterBottom>&copy; Santhosh J K</FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
