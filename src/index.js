import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Link ,Route ,Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'; 
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //header
  <div>
  <header>
    <div className='head'>
  <img className='icon' src='s.png' />
 <div className='h'><h1 className='hea'><strong>Santha</strong>OnlineShop</h1></div>
 <div className='search'><input className='searc' type='text' placeholder='Search for products'></input>
 <button className='btns' type='Search'>Search</button></div>
 <div >
    <BrowserRouter>
    <ul className='nav'>
    <li>
            <Link to="/">Home</Link>
    </li>
    <li>
            <Link to="/profile" >Profile</Link>
    </li>
     <li>
            <Link to="/contact">Contact</Link>
      </li>
      <li>
            <Link to="/about" >About</Link>
      </li>
      <li>   
            <Link to="/cart" ><FaCartPlus className='ico'/> Cart</Link>
      </li>
    </ul>
    <div className="sliding-text-container">
      <div className="sliding-text">Welcome to <b>Santha</b>OnlineStore</div>
    </div>
<Routes>
    <Route  path='/' element={<Home />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<About />} />
    <Route path='/cart' element={<Cart />} />
</Routes>

</BrowserRouter>
 </div>
 </div>
 
  </header>

</div>
);

reportWebVitals();
