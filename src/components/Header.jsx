import { StyledHeader, Logo, Nav, NavLink } from "./HeaderStyled.jsx";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>LOGO</Logo>
      <Nav>
        <NavLink href="#about">Про нас</NavLink>
        <NavLink href="#product">Товар</NavLink>
        <NavLink href="#features">Переваги</NavLink>
        <NavLink href="#slider">Галерея</NavLink>
        <NavLink href="#reviews">Відгуки</NavLink>
        <NavLink href="#contacts">Контакти</NavLink>
      </Nav>
    </StyledHeader>
  );
};
