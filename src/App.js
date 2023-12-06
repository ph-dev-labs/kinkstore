import './App.css';
import {Routes, Route,} from "react-router-dom"
import Home from './components/Home.jsx'
import CategoryProduct from './components/CategoryProduct.jsx';
import ProductDes from './components/ProductDes.jsx';
import RegisterPage from './components/RegisterPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import RecoveryPage from './components/RecoverEmail.jsx'; 
import ResetPassword from './components/ResetPassword.jsx';
import CheckoutPage from './components/CheckoutPage.jsx';
import Verification from './components/Verification.jsx';
import ProductPage from './components/ProductPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="category/:categoryId" element={<CategoryProduct />} />
        <Route path='product/:productId' element={<ProductDes />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='recoverpassword' element={<RecoveryPage />} />
        <Route path='resetpassword' element={<ResetPassword />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='verification' element={<Verification />} />
        <Route path='productpage' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
