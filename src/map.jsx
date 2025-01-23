import React,{Component} from "react";
import "./style.css";
import Slider from './Slider';
import PopularProducts from './Elements/popularproduct.jsx'
import SentimentAnalysis from "./language_analysis.js";
import greenHeart from './green_heart.png';
import usericon from './icon.png';
import dashboard_icon from './dashboard_icon.png';
import user_dash from './user_dash.png';
import heart_dash from './heart_dash.png';  
import dash3 from './dash3.jpg';
import dash4 from './dash4.jpg';
import dash5 from './dash5.jpg';
import plan1 from './plan1.png';
class MapComponent extends Component {

  ///////// The popular product part with session control ///////////////////////////////
  
  
  
 ////////////////////// PAGE Show //////////////

  showSignInpage = () => {
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'block';
    const main_page= document.getElementById('mental-main');
    main_page.style.display = 'none';
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////



  render() {
    return (
      <div>
        {/* 固定顶部横幅 */}
        <header className="top-banner">
          <div className="logo">Gromming</div>
          <nav>
            <ul className="menu">
              <li>
                <a href="#">Deals & Kits</a>
              </li>
              <li>
                <a href="#">Tools, Trimmers & Blades</a>
              </li>
              <li>
                <a href="#">Beard & Face</a>
              </li>
              <li>
                <a href="#">Head & Body</a>
              </li>
              <li>
                <a href="#">Shop All</a>
              </li>
            </ul>
          </nav>
          <div className="right-options">
            <a href="#">About us</a>
            <a href="#">Our CTA</a>
            <select name="language" id="language-select">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <a href="#" className="profile-icon">
              👤
            </a>
            <a href="#" className="cart-icon">
              🛒
            </a>
          </div>
        </header>

        <main>
          {/* 英雄部分，背景图片 */}
          <section className="hero">
            <div className="overlay">
              <div className="hero-text">
                <h1>This is our Slogan or New released product</h1>
                <p>
                  Stay with <span className="brand">Gromming®</span>.
                </p>
                <button className="shop-now">Shop Now</button>
              </div>
            </div>
          </section>
        </main>

        <PopularProducts />
      </div>
    );
  }
}

export default MapComponent;
