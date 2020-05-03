import Home from "../../screen/Home";
// import GoogleMaps from "../GoogleMaps";
import Sorter from "../Sorter";

const sorter = new Sorter([-1, 3, 10, -20, 0]);
sorter.sort();

console.log(sorter.collection);

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
