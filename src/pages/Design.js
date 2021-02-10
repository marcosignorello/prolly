import React from "react";
import styled from "styled-components";

const TABS = {
  design: "design",
  personalData: "personalData",
};
const STYLES = {
  red: "red",
  blue: "blue",
  line: "line",
  filled: "filled",
};
const BACKGROUND = {
  white: "white",
  beige: "beige",
  blue: "blue",
  green: "green",
};

function Design() {
  const [activeTab, setActiveTab] = React.useState(TABS.design);
  const [style, setStyle] = React.useState(STYLES.blue);
  const [size, setSize] = React.useState();
  const [background, setBackground] = React.useState(BACKGROUND.white);

  return (
    <Container>
      <SectionRow>
        <Canvas>
          <Image size={size}>
            <img
              src={`images/baby/${style}.png`}
              alt=""
              style={{ height: "100%" }}
            />
          </Image>
        </Canvas>
        <Form flex={1}>
          <label for="size">
            Size
            <select
              id="size"
              onChange={(event) => setSize(event.target.value)}
              defaultValue="300"
            >
              <option value="300">Small</option>
              <option value="400">Medium</option>
              <option value="500">Large</option>
            </select>
          </label>
          <label for="style">
            Style
            <select
              id="style"
              onChange={(event) => setStyle(event.target.value)}
              defaultValue={style}
            >
              {Object.keys(STYLES).map((styleKey) => (
                <option value={styleKey} key={styleKey}>
                  {STYLES[styleKey]}
                </option>
              ))}
            </select>
          </label>
        </Form>
      </SectionRow>
    </Container>
  );
}

export default Design;

const Canvas = styled.div`
  width: 430px;
  height: 600px;
  padding: 2em;
  background: #aaa;
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  height: ${(props) => Number.parseInt(props.size) || 300}px;
`;

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

const Form = styled.div`
  width: 50%;
  padding: 2em;
  background: #ccc;
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
