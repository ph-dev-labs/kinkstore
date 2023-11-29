import './App.css';
import {Routes, Route,} from "react-router-dom"
import Home from './components/Home.jsx'
import CategoryProduct from './components/CategoryProduct.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="category/:categoryId" element={<CategoryProduct />} />
      </Routes>
    </div>
  );
}

export default App;
