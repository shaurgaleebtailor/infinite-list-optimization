import Scroller from "./components/scroller/Scroller.jsx";
import "./App.scss";

const App = () => {
  return (
    <main>
      <header id="header">
        <h1>Infinite <span>&infin;</span> Scroller</h1>
      </header>
      <Scroller />
    </main>
  );
};

export default App;
