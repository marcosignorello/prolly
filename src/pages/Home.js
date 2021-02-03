import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <SectionRow>
        <Article flex={2}>
          <HeroContent>
            <HeroText>Alien DNA splicing.</HeroText>
            <HeroText>Done right.</HeroText>
            <Text>
              Use our unique splice-a-tron filter to select the features that
              are going to make your child stand out from the crowd. Why leave
              it to chance?
            </Text>
          </HeroContent>
          <img src="images/child.png" height="200" width="200" />
          <Link href="/design">
            <Button>Create your perfect child</Button>
          </Link>
        </Article>
        <Article flex={1}>
          <img src="images/dna.png" height="200" />
          <HeroText>The best of all worlds</HeroText>
          <Text>
            Don't settle for weak human genes. New intergalatic species being
            added all of time.
          </Text>
        </Article>
      </SectionRow>
      <SectionColumn>
        <HeroText>Success stories</HeroText>
        <SectionRow>
          <ShowcaseBox>
            <img src="images/showcase-1.png" height="180" alt="gomer" />
          </ShowcaseBox>
          <ShowcaseBox>
            <img src="images/showcase-2.png" height="180" alt="spline" />
          </ShowcaseBox>
          <ShowcaseBox>
            <img src="images/showcase-3.png" height="180" alt="dufus" />
          </ShowcaseBox>
        </SectionRow>
      </SectionColumn>
      <SectionColumn>
        <HeroText>How it works</HeroText>
        <SectionRow>
          <ScienceBox>
            <ScienceImage src="images/science-2.png" alt="gomer" />
            <Text>First we harvest the DNA from across the galaxy</Text>
          </ScienceBox>
          <ScienceBox>
            <ScienceImage src="images/science-3.png" alt="spline" />
            <Text>First we harvest the DNA from across the galaxy</Text>
          </ScienceBox>
          <ScienceBox>
            <ScienceImage src="images/science-1.png" alt="gomer" />
            <Text>First we harvest the DNA from across the galaxy</Text>
          </ScienceBox>
          <ScienceBox>
            <ScienceImage src="images/science-4.png" alt="spline" />
            <Text>First we harvest the DNA from across the galaxy</Text>
          </ScienceBox>
        </SectionRow>
      </SectionColumn>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
  min-height: 100vh;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.mainBackground};
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

const ScienceImage = styled.img`
  height: 120px;
  margin: 5px 10px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 180px 20px 180px;
`;

const HeroText = styled.span`
  font-size: 42px;
`;

const Text = styled.span`
  font-size: 24px;
  line-height: 1;
`;

const Button = styled.button`
  text-align: center;
  color: white;
  background-color: black;
  border-radius: 8px;
  font-size: 30px;
  padding: 8px;
  margin: 20px;
  cursor: pointer;
`;

const ScienceBox = styled.div`
  display: flex;
  flex: 1;
  margin: 10px 30px;
  padding: 10px;
  max-height: 360px;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const ShowcaseBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 10px 30px;
  padding: 100px;
  max-height: 360px;
  background-image: url("images/frame.svg");
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: 100% 100%;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  font-size: 48px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Article = styled.article`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  height: 100%;
  padding: 5px;
`;
