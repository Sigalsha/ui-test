import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

function App() {
  return (
    <Router>
      <div className="App">
        <BurgerMenu />
      </div>
      <div>
        {/* <Route path="/" exact component={} />
        <Route path="/workflow" exact component={Workflow} />
        <Route path="/statistics" exact component={Statistics} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/users" exact component={Users} />
        <Route path="/settings" exact component={Settings} /> */}
      </div>
    </Router>
  );
}

export default App;
