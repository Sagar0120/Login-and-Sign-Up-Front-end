//import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div> 
      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
