import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/style.css'; // Import CSS file from the assets directory
import logo from '../assets/images/logo.png';
import moviePoster from '../assets/dummy/salaar.jpg';

function HomePage() {
  return (
    <div id="site-content">
      <header className="site-header">
        <div className="container">
          <a href="index.html" id="branding">
            <img src={logo} alt="" className="logo" />
            <div className="logo-copy">
              <h1 className="site-title">BookMyMovie</h1>
              <small className="site-description">Bringing Blockbusters to Your Fingertips!</small>
            </div>
          </a>
          <div className="main-navigation">
            <button type="button" className="menu-toggle">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item"><Link to="/">Home</Link></li>
              <li className="menu-item"><Link to="/about">About</Link></li>
              <li className="menu-item current-menu-item"><Link to="/review">Movie reviews</Link></li>
              <li className="menu-item"><Link to="/contact">Contact</Link></li>
              <li className="menu-item"><Link to="/register">Join us</Link></li>
              <li className="menu-item"><Link to="/login">Login</Link></li>
            </ul>
            <form action="#" className="search-form">
              <input type="text" placeholder="Search..." />
              <button><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="mobile-navigation"></div>
        </div>
      </header>
      <main className="main-content">
        {/* Rest of  content goes here */}
        <div className="container">
          <div className="page">
            <div className="breadcrumbs">
              <a href="/">Home</a>
              <a href="review.html">Movie Review</a>
              <span>Guardians of The Galaxy Vol 3</span>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <figure className="movie-poster"> <img src={moviePoster} alt="#" style={{ maxWidth:'auto' , height: 'auto' }} /></figure>
                </div>
                <div className="col-md-6">
                  <h2 className="movie-title">Salaar</h2>
                  {/* Include movie summary and details here */}
                  <div className="movie-summary">
                    <p>Set in the fictional dystopian city-state of Khansaar, the film follows the friendship between Deva (Prabhas), a tribesman, and Varadha (Prithviraj), the prince of Khansaar. When a coup d'état is planned by his father's ministers and his relatives, Varadha enlists Deva's help to become Khansaar's undisputed ruler.</p>
                    {/* Add more content as needed */}
                  </div>
                </div>
              </div>
              <div className="entry-content">
                {/* Include  entry content here */}
              </div>
            </div>
          </div>
        </div>
        {/* Rest of content goes here */}
      </main>
      <footer className="site-footer">
        {/* Rest of  footer content goes here */}
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="widget">
                <h3 className="widget-title">About Us</h3>
                {/* Include About Us content here */}
              </div>
            </div>
          </div>
          <div className="colophon">BookMyMovie, Designed by Atharva and Sarvesh</div>
        </div>
       
      </footer>
    </div>
  );
}

export default HomePage;
