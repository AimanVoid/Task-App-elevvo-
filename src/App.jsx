import React from 'react';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {


  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Animate only once
  });
}, []);



  return (
    <div className="app">
      {/* Top Section */}
      <header className="top-section" data-aos="fade-up">
        <h1 className="fade-slide-in">TaskFlow</h1>
        <p className="fade-slide-in">Organize your tasks. Simplify your life.</p>
        <button className="fade-slide-in">Get Started</button>
      </header>

      
      
      {/* Features Section */}
{/* Features Section */}
<section className="features" data-aos="fade-right">
  <h2 className="fade-up feature-heading">Features</h2>
  <div className="feature-cards">
    <div className="feature-card fade-up card1">
      <i className="fa fa-check-circle"></i>
      <h3>Smart Task Management</h3>
      <p>Create, organize, and prioritize your tasks efficiently.</p>
    </div>
    <div className="feature-card fade-up card2">
      <i className="fa fa-bell"></i>
      <h3>Reminders & Alerts</h3>
      <p>Never miss a deadline with our smart reminders.</p>
    </div>
    <div className="feature-card fade-up card3">
      <i className="fa fa-sync"></i>
      <h3>Sync Across Devices</h3>
      <p>Access your tasks from anywhere, on any device.</p>
    </div>
  </div>
</section>


      {/* Reviews Section */}
      <section className="reviews" data-aos="zoom-in">
        <h2>What Users Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>"TaskFlow changed how I manage my day!"</p>
            <h4>– Sara K.</h4>
          </div>
          <div className="review-card">
            <p>"Simple, elegant, and super productive."</p>
            <h4>– Omar A.</h4>
          </div>
          <div className="review-card">
            <p>"The best task manager I've ever used."</p>
            <h4>– Fatima R.</h4>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" data-aos="fade-left">
        <h2>Choose Your Plan</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Free</h3>
            <p>$0/month</p>
            <ul>
              <li>Basic task tracking</li>
              <li>1 device</li>
            </ul>
            <button>Sign Up</button>
          </div>
          <div className="price-card">
            <h3>Pro</h3>
            <p>$5/month</p>
            <ul>
              <li>Unlimited tasks</li>
              <li>Reminders & sync</li>
            </ul>
            <button>Go Pro</button>
          </div>
          <div className="price-card">
            <h3>Team</h3>
            <p>$10/month</p>
            <ul>
              <li>Team collaboration</li>
              <li>All Pro features</li>
            </ul>
            <button>Start Team Plan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <p>Contact us: support@taskflow.app</p>
        <div className="social-icons">
          <a href="#"><i class="ri-instagram-fill"></i></a>
          <a href="#"><i class="ri-facebook-box-fill"></i></a>
          <a href="#"><i class="ri-whatsapp-fill"></i></a>
        </div>
        <p>&copy; 2025 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
