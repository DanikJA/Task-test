import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  padding: 24px 40px;
  background-color: #1a1a1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

export const ContactTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.a`
  display: block;
  font-size: 18px;
  color: #e0e0e0;
  margin-bottom: 12px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #1de9b6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #1de9b6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
