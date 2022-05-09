import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom'
import Products from './components/products';
import About from './components/about';
import Contacts from './components/contacts';
import Signup from './components/signup';
import Signin from './components/signin';
import Cart from './components/cart';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
