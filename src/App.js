
import './App.css';
import Navbar from './Componenet/Navbar/Navbar';
import {BrowserReact,Routes,Route, BrowserRouter} from 'react-router-dom';
import Shop from './Componenet/Pages/Shop';
import ShopCategory from './Componenet/Pages/ShopCategory';
import Product from './Componenet/Pages/Product';
import Cart from './Componenet/Pages/Cart';
import LoginSignup from './Componenet/Pages/LoginSignup';
import Footer from './Componenet/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category='men'/>}/>
        <Route path='/women' element={<ShopCategory Category='women'/>}/>
        <Route path='/kid' element={<ShopCategory category='kids'/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path='/productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
