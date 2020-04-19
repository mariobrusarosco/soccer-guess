import Home from "../../screen/Home";
import GoogleMaps from "../GoogleMaps";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);
  return (
    <main>
      <Home />
      <GoogleMaps />
    </main>
  );
};

export default App;
