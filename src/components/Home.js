import React from "react";
import './style/Home.css';
import { Link ,Route ,Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './components/about/About';

function Home(){
    return(
        <div className="container">
            <div>
           <img className="slide-container" src="images/slid.jpg" />
           </div>
           <hr />
           <div className="content">

            <hr />

            <BrowserRouter>

                <div className="categories">

                    <div className="categories-conten">
                    <img src="images/iphone14pro.jpg" />
                    <h4><Link to="/about" >About</Link></h4>
                    </div>

                    <div className="categories-conten">
                    <img src="images/fashion.jpg"/>  
                    <h4>Fashion</h4>
                    </div>

                    <div className="categories-conten">
                    <img src="images/electronics.jpg"/>  
                    <h4>Electronics</h4>
                    </div>

                    <div className="categories-conten">
                    <img src="images/furniture.jpg"/>  
                    <h4>Home & Furniture</h4>
                    </div>

                    <div className="categories-conten">
                    <img src="images/appliance.jpg"/>  
                    <h4>Appliance</h4>
                    </div>

                    <div className="categories-conten">
                    <img src="images/toys.jpg"/>  
                    <h4>Toys</h4>
                    </div>
                    
                </div>

                <Routes>
                <Route path='/about' element={<About />} />
                </Routes>

                </BrowserRouter>

            <hr />

            <div className="iphone-head">
                <h1>iphone</h1>
            </div>

            <div className="gallery">
            
            <div className="conten">
            <img src="images/iphone11.jpg" />
            <h3>Iphone 11</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <li className="buy-2">More Details</li>
            </div>

            <div className="conten">
            <img src="images/iphone11pro.jpg" />
            <h3>Iphone 11 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone11promax.jpg" />
            <h3>Iphone 11 pro Max</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone12.jpg" />
            <h3>Iphone 12</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone12pro.jpg" />
            <h3>Iphone 12 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone12promax.jpg" />
            <h3>Iphone 12 Pro Max</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone13.jpg" />
            <h3>Iphone 13</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone13pro.jpg" />
            <h3>Iphone 13 pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone13promax.jpg" />
            <h3>Iphone 13 Pro Max</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone14.jpg" />
            <h3>Iphone 14</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone14pro.jpg" />
            <h3>Iphone 14 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/iphone14promax.jpg" />
            <h3>Iphone 14 Pro Max</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            </div>


            <hr />
            <div className="oneplus-head">
                <h1>One Plus</h1>
            </div>

            <div className="gallery">

            <div className="conten">
            <img src="images/oneplus6t.jpg" />
            <h3>One Plus 6T</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/oneplus7.jpg" />
            <h3>One Plus 7</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus7t.jpg" />
            <h3>One Plus 7T</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus7pro.jpg" />
            <h3>One Plus 7 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus7tpro.jpg" />
            <h3>One Plus 7T Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus8.jpg" />
            <h3>One Plus 8</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus8t.jpg" />
            <h3>One Plus 8T</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus8pro.jpg" />
            <h3>One Plus 8 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus9.jpg" />
            <h3>One Plus 9</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus9pro.jpg" />
            <h3>One Plus 9 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus10pro.jpg" />
            <h3>One Plus 10 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/oneplus11pro.jpg" />
            <h3>One Plus 11 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            </div>

            
            <hr />
            <div className="oneplus-head">
                <h1>Redmi</h1>
            </div>

            <div className="gallery">

            <div className="conten">
            <img src="images/redminote8pro.jpg" />
            <h3>Redmi Note 8 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            <div className="conten">
            <img src="images/redmi9promax.jpg" />
            <h3>Redmi 9 Pro Max</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redmi10t.jpg" />
            <h3>Redmi 10T</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redmik20pro.jpg" />
            <h3>Redmi K20 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redmi11.jpg" />
            <h3>Redmi 11</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redminote11.jpg" />
            <h3>Redmi Note11</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redminote12pro.jpg" />
            <h3>Redmi Note 12 Pro</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>
            <div className="conten">
            <img src="images/redmi12proplus.jpg" />
            <h3>Redmi 12 Pro+</h3>
            <p>Top expensive of the mobile phone</p>
            <h6>$36.999</h6>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star"></i></li>
            </ul>
            <button className="buy-1">Buy Now</button>
            </div>

            </div>

       </div>
        </div>
    )
}
export default Home;