import React from "react";
import { Effect, Wrapper, InnerCircle, OuterCircle } from "./styles";

const Pulse: React.FunctionComponent = () => (
  <Effect>
    <Wrapper
      viewBox="0 0 40 40"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <InnerCircle cx={20} cy={20} r={11} />
      <OuterCircle cx={20} cy={20} r={19} />
    </Wrapper>
  </Effect>
);

export default Pulse;
