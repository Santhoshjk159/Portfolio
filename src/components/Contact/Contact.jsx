import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Contact section and layout styling
const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #121212, #1a1a1a);
  color: #f1f1f1;
  text-align: center;
  border-top: 2px solid #333;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #bbb;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.1rem;
  border: 1px solid #444;
  background: #333;
  color: #fff;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 1.2rem;
  font-size: 1.1rem;
  border: 1px solid #444;
  background: #333;
  color: #fff;
  border-radius: 8px;
  outline: none;
  min-height: 150px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 1.2rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Loader = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const StatusMessage = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.success ? "green" : "red")};
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SuccessIcon = styled(BsCheckCircleFill)`
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: green;
`;

const SocialIcons = styled.div`
  margin-top: 2rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    color: #f1f1f1;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }

    &.github:hover {
      color: #818589; // Github grey color
    }

    &.linkedin:hover {
      color: #0077b5; // LinkedIn blue color
    }

    &.instagram:hover {
      color: #ff69b4; // Instagram pink color
    }

    &.discord:hover {
      color: #7289da; // Discord blue color
    }
  }
`;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      to_name: "Santhosh", 
      from_name: formData.name,
      from_mail: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_556c4ev",
        "template_plpq1rp", 
        emailData, 
        "H7VVPBCmCOefzDCWl" 
      )
      .then(
        (response) => {
          setLoading(false);
          setStatus({
            message: "Message sent successfully!",
            success: true,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          setStatus({
            message: "An error occurred, please try again.",
            success: false,
          });
        }
      );
  };

  return (
    <ContactSection>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Description>
          I'm open to collaborations, questions, or just a friendly hello. Feel
          free to reach out!
        </Description>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <SubmitButton type="submit">
            {loading ? <Loader /> : "Send Message"}
          </SubmitButton>
        </Form>

        {status && (
          <StatusMessage success={status.success}>
            {status.success ? <SuccessIcon /> : null}
            {status.message}
          </StatusMessage>
        )}

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
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactMe;
