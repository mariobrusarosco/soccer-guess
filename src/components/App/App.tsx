import Home from "../../screen/Home";
import Learning from "../../domain/Learning";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);
  return (
    <main>
      <Home />
      <Learning />
    </main>
  );
};

export default App;
