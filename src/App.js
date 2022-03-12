import './App.css';
import './myCSS/body.css';
import { Navbar } from "./myComponents/Navbar";
import { Content } from "./myComponents/Content";
function App() {
  return (
    <div className='mainBody'>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
