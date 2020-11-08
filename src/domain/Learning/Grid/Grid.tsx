import styled from "styled-components";

const MyGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-template-rows: 100px 50px;
  grid-auto-columns: 400px;

  div {
    border: 1px solid red;
  }

  .item-2 {
    grid-column: 2 / -1;
  }
`;

const Grid: React.FC = () => {
  return (
    <MyGrid data-testid="grid">
      <div className="grid-item">item 1</div>
      <div className="grid-item item-2">item 2</div>
      <div className="grid-item">item 3</div>
      <div className="grid-item item-4">item 4</div>
      <div className="grid-item">item 5</div>
      <div className="grid-item">item 6</div>
      <div className="grid-item">item 7</div>
      <div className="grid-item">item 8</div>
      <div className="grid-item">item 9</div>
    </MyGrid>
  );
};

export default Grid;
