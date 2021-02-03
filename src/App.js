import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import Theme from "./Theme";

import TopNav from "./components/layout/TopNav";
import SideDrawer from "./components/layout/SideDrawer";
import Backdrop from "./components/layout/Backdrop";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App(props) {
  document.title = "Alien DNA splicing";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    return props.history.listen(() => {
      setIsMenuOpen(false);
    });
  });
  return (
    <Theme>
      <Main>
        <SideDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Backdrop setIsMenuOpen={setIsMenuOpen} />}
        <TopNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
        <Footer />
      </Main>
    </Theme>
  );
}

export default withRouter(App);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 100%;
`;
