import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Products from './pages/Products';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
