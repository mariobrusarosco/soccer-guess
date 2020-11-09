import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";

const Wrapper = styled.div`
  width: 650px;
`;

const Title = styled.h1`
  color: #ff2828;
  font-family: system-ui;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #5fadaf;
  }
`;

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  color: #5fadaf;
  font-family: system-ui;
  font-size: 18px;
  margin-left: 35px;
`;

const Leagues: React.FunctionComponent = () => {
  return (
    <section
      data-testid="leagues"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Wrapper>
        <Title>Leagues</Title>

        <Card>
          <Box>
            <Card></Card>
            <Paragraph>Original</Paragraph>
          </Box>

          <Box>
            <Card></Card>
            <Paragraph>Barril</Paragraph>
          </Box>
        </Card>
      </Wrapper>
    </section>
  );
};

export default Leagues;
