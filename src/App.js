
import './App.css';
import Navigation from './components/Navbar/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<Shopcategory category="mens"/>}/>
            <Route path='/womens' element={<Shopcategory category="womens"/>}/>
            <Route path='/kids' element={<Shopcategory category="kids"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Loginsignup/>}/>
            
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
