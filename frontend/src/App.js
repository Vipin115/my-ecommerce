import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Home } from './Components/Home';
import { Footer } from './Components/Footer/Footer';
import { Route, Router, Routes } from 'react-router';
import { Cart } from './Components/CartPage';
import { ProductDetail } from './Components/ProductDetailPage';
import { CartProvider } from 'react-use-cart';
import { CheckOut } from './Components/CheckoutPage';

import { Login } from './Components/Login';
import { Signup } from './Components/Signup';

import PaymentPage from './Components/Payment/PaymentPage';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <CartProvider>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:_id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
      </CartProvider>

      
      <Footer/>
    </div>
  );
}

export default App;
