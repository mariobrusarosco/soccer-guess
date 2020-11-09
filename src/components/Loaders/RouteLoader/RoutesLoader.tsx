import React from "react";
import styled from "styled-components";
import Pulse from "../Pulse";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
