import { Routes , Route } from  'react-router-dom'

import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import OrderSummary from './components/orderSummary';
import Nomatch from './components/namatch';
import Products from './components/products';
import FeaturedProducts from './components/featuredProducts';
import NewProducts from './components/newProducts';
import Users from './components/users';
import UserDetails from './components/userDetails';
import Admin from './components/admin';
import './App.css';
function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='order-summary' element={<OrderSummary/>}/>
            <Route path='*' element={<Nomatch/>}/>   
            <Route path='products' element={<Products/>}>
              <Route index element={<FeaturedProducts/>}/>
              <Route path='featured' element={<FeaturedProducts/>}/>
              <Route path='new' element={<NewProducts/>}/>
            </Route>
            <Route path='users' element={<Users/>}>
              <Route path=':userId' element={<UserDetails/>}/> 
              <Route path='admin' element={<Admin/>}/>
            </Route>
        </Routes>
      
    </div>
  );
}

export default App;
