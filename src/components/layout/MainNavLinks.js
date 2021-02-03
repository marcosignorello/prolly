import React from "react";
import styled from "styled-components";

const MainNavLinks = () => {
  return (
    <React.Fragment>
      <NavLink>
        <Link href="/design">design</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">about</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">contact</Link>
      </NavLink>
    </React.Fragment>
  );
};

export { MainNavLinks };

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
