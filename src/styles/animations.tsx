import { keyframes } from "styled-components";

export const pulse = keyframes`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    transform: scale(2.2);
  }
`;

export const pulseCore = keyframes`
  0% {
    transform: scale(0.4);
  }

  50% {
    transform: scale(-0.4);
  }

  100% {
    transform: scale(0.4);
  }
`;
