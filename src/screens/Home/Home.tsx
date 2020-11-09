import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card/Card";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-around;
`;

export const Button = styled.button`
  color: #5fadaf;
  font-family: system-ui;
  outline: none;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const Home: React.FunctionComponent = () => {
  return (
    <section
      data-testid="home"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ButtonsWrapper>
        <Card>
          <Link to="/tournaments">
            <Button>Add tournament</Button>
          </Link>
        </Card>
        <Card>
          <Link to="/leagues">
            <Button>Create a league</Button>
          </Link>
        </Card>
      </ButtonsWrapper>
    </section>
  );
};

export default Home;
