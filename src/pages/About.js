import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Header>About page</Header>
      <Section>section 1</Section>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
  min-height: 100vh;
  color: ${(props) => props.theme.primary};
`;

const Header = styled.h2`
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
