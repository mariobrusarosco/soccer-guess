import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  &.route-motion-enter,
  &.route-motion-appear {
    opacity: 0;
    transform: scale(0.95);
  }

  &.route-motion-enter-active,
  &.route-motion-appear-active {
    opacity: 1;
    transform: scale(1);
    will-change: transform, opacity;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &.route-motion-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.route-motion-exit-active {
    opacity: 0;
    transform: scale(0.95);
    will-change: transform, opacity;
    transition: opacity 0.3s ease-in-out, transform 0.35s ease-in-out;
  }
`;

const RouteLayout = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default RouteLayout;
