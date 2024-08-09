import React from 'react';
import './ExplorePremium.css';
import './Common Styles.css';

function ExplorePremium () {
  return (
    <div className="exp-container">

      <div className="content-wrapper container">
          <h1>Affordable plans for any situation</h1>
          <p>
            Choose a Premium plan and listen to ad-free music without limits on
            your phone, speaker, and other devices. Pay in various ways. Cancel
            anytime.
          </p>
          <br /> <br />
          <div className="payment-icons">
            <div className="payment-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
            </div>
            <div className="payment-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4ArUxtci1ip0bL0K9hs9QtwcJGy_gu9iYA&s" alt="Google Pay" />
            </div>
            <div className="payment-icon">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-paytm-226448.png?f=webp&w=256" alt="Paytm" />
            </div>
            <div className="payment-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK72RBoNYIExapV2XAQoVVBZQJz2oJsk9SHg&s" alt="PhonePe" />
            </div>
            <div className="payment-icon">
              <h4>+6</h4>
            </div>
          </div>

          <div className="benefits-container">          
            <h2>All Premium plans include</h2>

            <div className="benefits">
              <div className="benefit">Ad-free music listening</div>
              <div className="benefit">Download to listen offline</div>
              <div className="benefit">Play songs in any order</div>
              <div className="benefit">High audio quality</div>
              <div className="benefit">Listen with friends in real time</div>
              <div className="benefit">Organize listening queue</div>
              <div className="benefit">Listening insights</div>
            </div>
          </div>

      </div>

      <div className="plans-container container">

        <div className="plan-card individual">
          <div className="plan-header">₹119 for 2 months</div>
          <div className="plan-body">
            <h3>Premium Individual</h3>
            <p>₹119 for 2 months</p>
            <p>₹119 / month after</p>
            <ul>
              <li>1 verified Premium account</li>
              <li>Subscribe or one-time payment</li>
              <li>Cancel anytime</li>
            </ul>
            <button>Get Premium Individual</button>
          </div>
        </div>
        <div className="plan-card student">
          <div className="plan-header">₹59 for 2 months</div>
          <div className="plan-body">
            <h3>Premium Student</h3>
            <p>₹59 for 2 months</p>
            <p>₹59 / month after</p>
            <ul>
              <li>1 verified Premium account</li>
              <li>Discount for eligible students</li>
              <li>Cancel anytime</li>
            </ul>
            <button>Get Premium Student</button>
          </div>
        </div>
        <div className="plan-card duo">
          <div className="plan-header">₹149 for 2 months</div>
          <div className="plan-body">
            <h3>Premium Duo</h3>
            <p>₹149 for 2 months</p>
            <p>₹149 / month after</p>
            <ul>
              <li>2 Premium accounts</li>
              <li>Subscribe or one-time payment</li>
              <li>Cancel anytime</li>
            </ul>
            <button>Get Premium Duo</button>
          </div>
        </div>
        <div className="plan-card mini">
          <div className="plan-header">₹7 for 1 day</div>
          <div className="plan-body">
            <h3>Premium Mini</h3>
            <p>₹7 for 1 day</p>
            <p>₹25 for 1 week</p>
            <ul>
              <li>1 mobile only premium account</li>
              <li>Offline listening up to 30 songs</li>
              <li>Basic audio quality</li>
            </ul>
            <button>Get Premium Mini</button>
          </div>
        </div>
        <div className="plan-card family">
          <div className="plan-header">₹179 for 2 months</div>
          <div className="plan-body">
            <h3>Premium Family</h3>
            <p>₹179 for 2 months</p>
            <p>₹179 / month after</p>
            <ul>
              <li>Up to 6 Premium accounts</li>
              <li>Control explicit content</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <button>Get Premium Family</button>
          </div>
        </div>
        
      </div>

      <div className="experience-container container">
        <h2>Experience the difference</h2>
        <p>Go Premium and enjoy full control of your listening. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default ExplorePremium;
