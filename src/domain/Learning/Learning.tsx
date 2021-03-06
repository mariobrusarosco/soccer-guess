// import GoogleMaps from "./GoogleMaps";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import "./Generics";
import Grid from "./Grid";

const numbers = new NumbersCollection([100, -1, 3, 10, -20, 0]);
numbers.sort();
console.log(numbers);

const characters = new CharactersCollection("ZaoB");
characters.sort();
console.log(characters);

const Learning: React.FunctionComponent = () => {
  // return <>{/* <GoogleMaps /> */}</>;
  return (
    <>
      <Grid />{" "}
    </>
  );
};

export default Learning;
