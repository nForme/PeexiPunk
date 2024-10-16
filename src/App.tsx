import "./styles/App.css";
import TopNewsBlock from "./components/TopNewsBlock/TopNewsBlock";

import NewsList from "./components/NewsList/NewsList";

function App() {
  return (
    <div className="main-container">
      <TopNewsBlock />
      <NewsList />
    </div>
  );
}

export default App;
