import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import './Common Styles.css';
import './images.css';


function LandingPage() {
  
  useEffect(() => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');

    // Clone items for infinite effect
    carouselItems.forEach(item => {
      const clone = item.cloneNode(true);
      carouselInner.appendChild(clone);
    });
  }, []);

  const [isSection1Visible, setIsSection1Visible] = useState(true);
  const [isSection2Visible, setIsSection2Visible] = useState(false);

  // Event handler to toggle the visibility
  const handleNextBtnClick = () => {
    setIsSection1Visible(false);
    setIsSection2Visible(true);
  };

  const handleBackBtnClick = () => {
    setIsSection1Visible(true);
    setIsSection2Visible(false);
  };


  return (

    <div class="landingPage">

      <section className="section1" style={{ display: isSection1Visible ? 'flex' : 'none' }}>

          <div class="middle-content">
            <div class="left-content">
              <h1>Popular Artist</h1>
              <p>The week's most popular artists across all genres, ranked by album and track sales as compiled by Luminate, radio airplay audience...</p>
              
              <Link to="/signup">
                <button class="explore-button">Explore Now</button>
              </Link>

              <div className="btn-container">
                <button id="back-btn" onClick={handleBackBtnClick}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10.5L13.5 19L14.8222 17.5833L7.83333 10.5L14.8222 3.41667L13.5 2L5 10.5Z" fill="white"/>
                  </svg>
                </button>
                <button id="next-btn" onClick={handleNextBtnClick}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.32222 2L5 3.41667L11.9889 10.5L5 17.5833L6.32222 19L14.8222 10.5L6.32222 2Z" fill="white"/>
                  </svg>
                </button>
              </div>


            </div>

            <div class="right-content">

              <div class="carousel-inner">
                <div class="carousel-item">
                  <div id="artist-1" alt="Artist 1" />
                </div>
                <div class="carousel-item">
                  <div id="artist-2" alt="Artist 2" />
                </div>
                <div class="carousel-item">
                  <div id="artist-3" alt="Artist 3" />
                </div>
                <div class="carousel-item">
                  <div id="artist-4" alt="Artist 4" />
                </div>
                <div class="carousel-item">
                  <div id="artist-5" alt="Artist 5" />
                </div>
                <div class="carousel-item">
                  <div id="artist-6" alt="Artist 6" />
                </div>
                <div class="carousel-item">
                  <div id="artist-1" alt="Artist 7" />
                </div>
              </div>

            </div>
          </div>

      </section>

      <section className="section2" style={{ display: isSection2Visible ? 'flex' : 'none' }}>

        <div class="middle-content">
          <div class="left-content">
            <h1>Popular Genres</h1>
              <p>
                Music can be divided into genres in numerous ways, sometimes broadly
                and with polarity, such as for popular music, as opposed to art
                music or folk music; or, as ...
              </p>
              <Link to="/signup">
                <button class="explore-button">Explore Now</button>
              </Link>
              <div className="btn-container">
                <button id="back-btn" onClick={handleBackBtnClick}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10.5L13.5 19L14.8222 17.5833L7.83333 10.5L14.8222 3.41667L13.5 2L5 10.5Z" fill="black"/>
                  </svg>
                </button>
                <button id="next-btn" onClick={handleNextBtnClick}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.32222 2L5 3.41667L11.9889 10.5L5 17.5833L6.32222 19L14.8222 10.5L6.32222 2Z" fill="white"/>
                  </svg>
                </button>
              </div>

          </div>
        </div>
        <div class="carousel-container">

          <div class="carousel-inner">
                <div class="carousel-item">
                  <div id="artist-3" alt="Artist 1" />
                </div>
                <div class="carousel-item">
                  <div id="artist-1" alt="Artist 2" />
                </div>
                <div class="carousel-item">
                  <div id="artist-2" alt="Artist 3" />
                </div>
                <div class="carousel-item">
                  <div id="artist-6" alt="Artist 4" />
                </div>
                <div class="carousel-item">
                  <div id="artist-9" alt="Artist 9" />
                </div>
                <div class="carousel-item">
                  <div id="artist-10" alt="Artist 10" />
                </div>
                <div class="carousel-item">
                  <div id="artist-11" alt="Artist 11" />
                </div>
                <div class="carousel-item">
                  <div id="artist-5" alt="Artist 5" />
                </div>
                <div class="carousel-item">
                  <div id="artist-4" alt="Artist 6" />
                </div>
                <div class="carousel-item">
                  <div id="artist-7" alt="Artist 7" />
                </div>

          </div>
          <div class="carousel-inner">
                <div class="carousel-item">
                  <div id="ret1" alt="Artist 1" />
                </div>
                <div class="carousel-item">
                  <div id="ret2" alt="Artist 2" />
                </div>
                <div class="carousel-item">
                  <div id="ret3" alt="Artist 3" />
                </div>
                <div class="carousel-item">
                  <div id="ret4" alt="Artist 4" />
                </div>
                <div class="carousel-item">
                  <div id="ret5" alt="Artist 5" />
                </div>
                <div class="carousel-item">
                  <div id="ret6" alt="Artist 6" />
                </div>
                <div class="carousel-item">
                  <div id="ret7" alt="Artist 7" />
                </div>
                <div class="carousel-item">
                  <div id="ret1" alt="Artist 1" />
                </div>
                <div class="carousel-item">
                  <div id="ret2" alt="Artist 2" />
                </div>
                <div class="carousel-item">
                  <div id="ret3" alt="Artist 3" />
                </div>
          </div>
          <div class="carousel-inner">
                <div class="carousel-item">
                  <div id="playlist-1" alt="Artist 1" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-2" alt="Artist 2" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-3" alt="Artist 3" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-4" alt="Artist 4" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-5" alt="Artist 5" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-6" alt="Artist 6" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-1" alt="Artist 7" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-3" alt="Artist 3" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-5" alt="Artist 5" />
                </div>
                <div class="carousel-item">
                  <div id="playlist-3" alt="Artist 3" />
                </div>
          </div>

        </div>


      </section>

    </div>

  );
};

export default LandingPage;
