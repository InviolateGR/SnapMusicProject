import React from 'react';
import './InstallApp.css';
import './Common Styles.css';
import windowsIcon from '/src/assets/windows-logo.png'; 
import appleIcon from '/src/assets/apple-logo.png'; 

function App() {
  return (
    <div className="install-container">

      <div className="main-content">

        <h1>Seamlessly listen to music you love. Download the Spotify app for your computer.</h1>
        
        <div className="download-buttons">

          <button className="btn">
            <img src={windowsIcon} alt="Windows" />
          </button>

          <button className="btn">
            <img src={appleIcon} alt="Apple" />
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
