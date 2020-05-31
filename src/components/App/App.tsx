import Home from "../../screen/Home";
// import GoogleMaps from "../GoogleMaps";
import NumbersCollection from "../NumbersCollection";
import CharactersCollection from "../CharactersCollection";

const numbers = new NumbersCollection([100, -1, 3, 10, -20, 0]);
numbers.sort();
console.log(numbers);

const characters = new CharactersCollection("ZaoB");
characters.sort();
console.log(characters);

const App: React.FC = () => {
  console.log("App Component", APPLICATION);
  return (
    <main>
      <Home />
      {/* <GoogleMaps /> */}
    </main>
  );
};

export default App;
