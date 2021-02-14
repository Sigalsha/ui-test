import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
// import "./App.css";
import Header from "./components/header/Header";
import Avatar from "./components/shared/avatar/Avatar";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Header />
        <MainPage />
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
