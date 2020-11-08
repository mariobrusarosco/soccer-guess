import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 3px 1px 6px 0px #e0e0e0;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
