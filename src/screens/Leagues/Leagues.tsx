import React from "react";
import Card from "../../components/Card/Card";
import { CSSTransition } from "react-transition-group";
import { fadeIn } from "../../styles/animations";
import styled from "styled-components";

// function template(i, items, duration) {
//   return `
//       &:nth-child(${i + 1}) {
//         animation-delay: ${`${(duration / items) * i}s`};
//        }
//     `;
// }

// function getAnimationDuration(items, duration) {
//   let str = "";
//   for (let i = 0; i < items; i += 1) {
//     str += template(i, items, duration);
//   }
//   return str;
// }

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

const Wrapper = styled.div`
  width: 650px;

  // &.motion-enter,
  // &.motion-appear {
  ${Box} {
    opacity: 0;
  }

  // &.motion-enter-active,
  // &.motion-appear-active {
  ${Box} {
    animation-name: ${fadeIn};
    animation-timing-function: cubic-bezier(1, -0.24, 0.23, 1.4);
    animation-fill-mode: forwards;

    &:nth-child(1) {
      animation-duration: 0.6s;
    }

    &:nth-child(2) {
      animation-duration: 0.8s;
    }
  }
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

const Leagues: React.FunctionComponent = () => {
  return (
    // <TransitionGroup>

    <section
      data-testid="leagues"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CSSTransition in classNames="motion" timeout={350} appear enter>
        <Wrapper>
          <Title>Leagues</Title>

          <Card>
            <Box>
              <Card></Card>
              <Paragraph>Originals</Paragraph>
            </Box>

            <Box>
              <Card></Card>
              <Paragraph>Barril</Paragraph>
            </Box>
          </Card>
        </Wrapper>
      </CSSTransition>
    </section>
    // </TransitionGroup>
  );
};

export default Leagues;
