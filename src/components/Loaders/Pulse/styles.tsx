import styled from "styled-components";
import { pulse, pulseCore } from "../../../styles/animations";

export const Effect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after,
  &:before {
    content: "";
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ff9292;
    transform: scale(1);
    opacity: 0;
    will-change: transform, opacity;
  }

  &:before {
    animation: ${pulse} 6s infinite;
  }

  &:after {
    animation: ${pulse} 6s 1s infinite;
  }
`;

export const Wrapper = styled.svg`
  height: 50px;
`;

export const InnerCircle = styled.circle`
  fill: #ff9292;
  transform: scale(0.4);
  transform-origin: center;
  will-change: fill, transform;
  transition: fill 0.35s ease-in;
  animation: ${pulseCore} 3.5s ease-in-out forwards infinite;
`;

export const OuterCircle = styled.circle`
  fill: none;
  stroke-width: 1px;
  stroke: #ff9292;
  transform: rotate(35deg);
  will-change: stroke;
  transition: stroke 0.35s ease-in;
  transform-box: fill-box;
  transform-origin: center;
`;
