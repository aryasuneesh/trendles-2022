import './App.css';
import './myComponents/myCSS/body.css';
import { Navbar } from "./myComponents/Navbar";
import { Content1 } from "./myComponents/Content1";
import { Content2 } from "./myComponents/Content2";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='mainBody'>
      <Switch>
        <Route exact path="/">
      <Navbar/>
      <Content1/>
      <Content3/>
      <Content2/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
