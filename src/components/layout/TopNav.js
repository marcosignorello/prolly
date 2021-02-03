import React from "react";
import styled from "styled-components";

import { Menu } from "@styled-icons/material/Menu";

import { MainNavLinks } from "./MainNavLinks";

const TopNav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container>
      <Bar>
        <NavLink>
          <Link href="/">
            <Logo src="prolly-logo-temp.png" alt="prolly-logo" />
          </Link>
        </NavLink>
        {!isMenuOpen && (
          <RightBar>
            <LinksWrapper>
              <MainNavLinks />
            </LinksWrapper>
            <MenuIcon onClick={() => setIsMenuOpen(true)} />
          </RightBar>
        )}
      </Bar>
    </Container>
  );
};

export default TopNav;

const Container = styled.div`
  display: flex;
  height: 70px;
  font-size: 20px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
  padding: 0 5px;
  width: 100%;
  background-color: ${(props) => props.theme.mainBackground};
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const LinksWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(Menu)`
  color: ${(props) => props.theme.primary};
  width: 30px;
  height: 30px;
  margin: 3px;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin: auto;
  max-width: ${(props) => props.theme.maxAppWidth};
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const NavLink = styled.li`
  display: flex;
  justify-content: bottom;
  padding: 5px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  &:hover,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;
