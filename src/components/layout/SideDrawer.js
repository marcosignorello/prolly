import React from "react";
import styled from "styled-components";

import { Close } from "@styled-icons/material/Close";

import { MainNavLinks } from "./MainNavLinks";

const SideDrawer = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container show={isMenuOpen}>
      <Row>
        <CloseIcon onClick={() => setIsMenuOpen(false)} />
      </Row>
      <Row>
        <Link href="/">
          <Logo src="prolly-logo-temp.png" alt="prolly-logo" />
        </Link>
      </Row>
      <Row>
        <MainNavLinks />
      </Row>
    </Container>
  );
};

export default SideDrawer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.mainBackground};
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "")};
  font-size: 25px;
`;

const Logo = styled.img`
  width: 40%;
  margin: auto;
`;

const CloseIcon = styled(Close)`
  color: ${(props) => props.theme.primary};
  width: 30px;
  height: 30px;
  margin: 3px;
  cursor: pointer;
  margin-left: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
`;

const Link = styled.a`
  display: flex;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  &:hover,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;
