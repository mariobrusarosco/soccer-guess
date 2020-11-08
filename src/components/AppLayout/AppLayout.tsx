import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
`;

const AppLayout = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default AppLayout;
