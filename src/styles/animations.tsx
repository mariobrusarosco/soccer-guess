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

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
