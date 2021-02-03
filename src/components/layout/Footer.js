import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Bar>
        <LeftBar>copyright our learning club</LeftBar>
        <Spacer />
        <NavLinks>
          <NavLink>
            <Link href="stuff">stuff</Link>
          </NavLink>
        </NavLinks>
      </Bar>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Spacer = styled.div`
  flex: 1;
`;

const LeftBar = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const NavLink = styled.div`
  padding: 0 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
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
