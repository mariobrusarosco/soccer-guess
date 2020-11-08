import Header from "../components/Header/Index";

const Home: React.FC = () => {
  return (
    <section data-testid="home">
      <Header />
      <h1>Welcome to Soccer Guess</h1>
    </section>
  );
};

export default Home;
