import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 3px 1px 6px 0px #e0e0e0;
`;

const Item = styled.li`
  list-style: none;
  // padding: 20px;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  box-shadow: 0px 5px 6px 0px #e0e0e0;
  margin-bottom: 30px;
  font-size: 10px;
  cursor: pointer;

  a {
    display: block;
    height: 100%;
  }
`;

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <Item>
            <Link to="/"></Link>
          </Item>
          {/* <Item>
            <Link to="/sign-in"></Link>
          </Item>
          <Item>
            <Link to="/sign-up"></Link>
          </Item> */}
          <Item>
            <Link to="/leagues"></Link>
          </Item>
          <Item>
            <Link to="/tournaments"></Link>
          </Item>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
