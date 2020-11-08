import React from "react";
import styled from "styled-components";
import Pulse from "../Pulse";

const Container = styled.div`
  .body {
    height: calc(100vh - #{$header-height});
    height: calc(100vh - var(--header-height));
    width: 100%;
    background-color: $primary-color;
    background-color: var(---primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 50px;
  margin: 0 auto;
`;

const RoutesLoader = () => {
  return (
    <Container>
      <Wrapper>
        <Pulse />
      </Wrapper>
    </Container>
  );
};

export default RoutesLoader;
