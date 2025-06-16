import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 40px;
  background-color: #1a1a1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #00bcd4;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  margin-left: 320px;
`;

export const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
  align-items: center;

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
