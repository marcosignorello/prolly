import React from "react";
import styled from "styled-components";

const Backdrop = ({ toggleSideDrawer }) => (
  <Wrapper onClick={() => toggleSideDrawer(false)} />
);

export default Backdrop;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
