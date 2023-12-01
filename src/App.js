import './App.css';
import {Routes, Route,} from "react-router-dom"
import Home from './components/Home.jsx'
import CategoryProduct from './components/CategoryProduct.jsx';
import ProductDes from './components/ProductDes.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="category/:categoryId" element={<CategoryProduct />} />
        <Route path='product/:productId' element={<ProductDes />} />
      </Routes>
    </div>
  );
}

export default App;
