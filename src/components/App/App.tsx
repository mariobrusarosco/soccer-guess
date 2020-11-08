import AppRouter from "../AppRouter";
// import Learning from "../../domain/Learning";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);

  return (
    <main>
      {/* <Learning /> */}
      <AppRouter />
    </main>
  );
};

export default App;
