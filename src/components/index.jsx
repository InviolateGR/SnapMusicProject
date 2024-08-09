import React, { useState } from 'react';
import './Common Styles.css';
import './Sidebar.css';
import './Main.css';
import './Footer.css';
import './images.css';

function SinglePage() {
  // Define state to manage the visibility of the pages
  const [isPlaylistPageVisible, setIsPlaylistPageVisible] = useState(false);
  const [isMainPageVisible, setIsMainPageVisible] = useState(true);

  // Event handler to toggle the visibility
  const handlePlaylistCardClick1 = () => {
    setIsPlaylistPageVisible(true);
    setIsMainPageVisible(false);
  };
  const handleBackBtnClick = () => {
    setIsMainPageVisible(true);
    setIsPlaylistPageVisible(false);
  };



  // Define state to manage the audio player
  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const baseUrl = 'src/assets/';
  // Define the list of songs
  const songs = [
    { id: 1, title: 'Muzumathi', artist: 'A.R. Rahman', album: 'AR Hits' , dateadded: '02-08-2024' , src: 'src\assets\Muzumathi A.R. Rahman.mp3' },
    { id: 2, title: 'Kannukul Kannai', artist: 'A.R. Rahman', album: 'AR Melows', dateadded: '02-08-2024' , src: 'src\assets\Kannukkul Kannai A.R. Rahman.mp3' },
    { id: 3, title: 'Hosanna', artist: 'A.R. Rahman', album: 'AR Melows', dateadded: '02-08-2024' , src: 'src\assets\Hosanna A.R. Rahman.mp3' },
    { id: 4, title: 'Aga Naga', artist: 'A.R. Rahman', album: 'AR Melows', dateadded: '02-08-2024' , src: 'src\assets\Aga Naga A.R. Rahman.mp3' },
    { id: 5, title: 'Aaruyire', artist: 'A.R. Rahman', album: 'AR Melows', dateadded: '02-08-2024' , src: 'src\assets\Aaruyire A.R. Rahman.mp3' },
   
    // Add more songs here
  ];


  return (

    <div className="singlePage">
        

        <section className='middle'>
            {/* sidebar section */}
            <aside className="sidebar">

                <div className='sidebar-container'>
                    <div className='playlist-icon-container'> 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_32_47)">
                        <path d="M11 2.20833C10.7115 1.99196 10.3606 1.875 10 1.875C9.63938 1.875 9.28849 1.99196 9 2.20833L3.16667 6.58333C2.95967 6.73858 2.79167 6.93988 2.67595 7.17131C2.56024 7.40274 2.5 7.65792 2.5 7.91667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H7.41667C7.65978 17.5 7.89294 17.4034 8.06485 17.2315C8.23676 17.0596 8.33333 16.8264 8.33333 16.5833V12.5C8.33333 12.058 8.50893 11.634 8.82149 11.3215C9.13405 11.0089 9.55797 10.8333 10 10.8333C10.442 10.8333 10.866 11.0089 11.1785 11.3215C11.4911 11.634 11.6667 12.058 11.6667 12.5V16.5833C11.6667 16.8264 11.7632 17.0596 11.9352 17.2315C12.1071 17.4034 12.3402 17.5 12.5833 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V7.91667C17.5 7.65792 17.4398 7.40274 17.324 7.17131C17.2083 6.93988 17.0403 6.73858 16.8333 6.58333L11 2.20833Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_32_47">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div className='playlist-icon-container'> 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 17.4999L13.8808 13.8808M13.8808 13.8808C14.4999 13.2617 14.991 12.5267 15.326 11.7179C15.661 10.909 15.8335 10.0421 15.8335 9.16659C15.8335 8.29109 15.6611 7.42416 15.326 6.61531C14.991 5.80645 14.4999 5.0715 13.8808 4.45243C13.2617 3.83335 12.5268 3.34228 11.7179 3.00724C10.9091 2.6722 10.0422 2.49976 9.16666 2.49976C8.29115 2.49976 7.42422 2.6722 6.61537 3.00724C5.80651 3.34228 5.07156 3.83335 4.45249 4.45243C3.20221 5.7027 2.49982 7.39844 2.49982 9.16659C2.49982 10.9347 3.20221 12.6305 4.45249 13.8808C5.70276 15.131 7.3985 15.8334 9.16666 15.8334C10.9348 15.8334 12.6305 15.131 13.8808 13.8808Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div className='sidebar-container'>
                    <div className='playlist-icon-container'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.81125 2.5C1.94875 2.5 1.25 3.2 1.25 4.0625V15.9312C1.25 16.7937 1.95 17.4937 2.81125 17.4937H3.43625C4.29875 17.4937 4.9975 16.7937 4.9975 15.9312V4.06125C4.9975 3.19875 4.2975 2.5 3.435 2.5H2.81125ZM7.8075 2.5C6.945 2.5 6.245 3.2 6.245 4.0625V15.9312C6.245 16.7937 6.945 17.4937 7.8075 17.4937H8.4325C8.84647 17.4931 9.24325 17.3282 9.53574 17.0352C9.82822 16.7423 9.9925 16.3452 9.9925 15.9312V4.06125C9.99217 3.64728 9.82757 3.25036 9.53485 2.95765C9.24214 2.66493 8.84522 2.50033 8.43125 2.5H7.8075ZM14.965 5.97125C14.8149 5.59882 14.5272 5.29848 14.1615 5.13253C13.7959 4.96658 13.3804 4.94777 13.0013 5.08L12.2738 5.335C12.0747 5.40489 11.8918 5.51437 11.7362 5.65683C11.5806 5.7993 11.4555 5.97181 11.3683 6.16396C11.2812 6.3561 11.2339 6.56391 11.2292 6.77483C11.2246 6.98576 11.2627 7.19545 11.3412 7.39125L15.0125 16.5212C15.3238 17.2963 16.1875 17.6875 16.9763 17.4125L17.7038 17.1575C17.903 17.0876 18.086 16.9781 18.2417 16.8355C18.3974 16.693 18.5226 16.5204 18.6098 16.3281C18.6969 16.1358 18.7442 15.9278 18.7487 15.7167C18.7533 15.5057 18.715 15.2959 18.6362 15.1L14.965 5.97125Z" fill="white"/>
                    </svg>
                    </div>
                    <div className='playlist-icon-container' id="thumbnail-13"> </div>
                    <div className='playlist-icon-container' id="thumbnail-11"> </div>
                    <div className='playlist-icon-container' id="thumbnail-10"> </div>
                    <div className='playlist-icon-container' id="thumbnail-12"> </div>
                    <div className='playlist-icon-container' id="thumbnail-5"> </div>
                    <div className='playlist-icon-container' id="thumbnail-4"> </div>
                    <div className='playlist-icon-container' id="thumbnail-7"> </div>
                    <div className='playlist-icon-container' id="thumbnail-8"> </div>
                    <div className='playlist-icon-container' id="thumbnail-2"> </div>
                    <div className='playlist-icon-container' id="thumbnail-6"> </div>
                
                </div>

            </aside>

            {/* main section */}
            <section id="main-home-page" className="main main-home-view" style={{ display: isMainPageVisible ? 'flex' : 'none' }}>

                <section className="recent-playlists">

                    <div className="playlist">
                    <div className="thumbnail-image" id="thumbnail-1" />
                    <h4>Slowed</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-2" /> 
                        <h4>Electronic</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-3" /> 
                        <h4>Gaming</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-4" /> 
                        <h4>Ambient Playing</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-5" /> 
                        <h4>Gym</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-6" /> 
                        <h4>Driving - Nature</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-7" /> 
                        <h4>Chill Hip-Hop</h4>
                    </div>
                    <div className="playlist">
                        <div className="thumbnail-image" id="thumbnail-8" /> 
                        <h4>Rock Dance</h4>
                    </div>
                </section>

                <section className="new-mixes-wrap">
                    <div className="title-content">
                        <h2>Made For You</h2>
                        <h4>Show All</h4>
                    </div>
                    <div className="mixes-flex-wrap">
                        <div onClick={handlePlaylistCardClick1} className="mix-card-container">
                            <div className="mix-thumbnail-container" id="artist-1"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 1</h4>
                                <p>A.R. Rahman, Hariharan and more</p>
                            </div>
                        </div>
                        <div className="mix-card-container" >
                            <div className="mix-thumbnail-container" id="artist-4"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 5</h4>
                                <p>Eminem</p>
                            </div>
                        </div>                        
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-9"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 2</h4>
                                <p>Electronic, Techno</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="artist-2"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 3</h4>
                                <p>Anirudh, Hip-Hop Thamizha...</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="artist-3"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 4</h4>
                                <p>G V Praksh, Yuvan Shankar...</p>
                            </div>
                        </div>

                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-8"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 6</h4>
                                <p>Tylor Shift, Post Malone...</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-3"></div>
                            <div className="mix-about-wrap">
                                <h4>Daily Mix 7</h4>
                                <p>C14 - techno... </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="new-mixes-wrap">
                    <div className="title-content">
                        <h2>Jump Back in</h2>
                        <h4>Show All</h4>
                    </div>
                    <div className="mixes-flex-wrap">
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-10"></div>
                            <div className="mix-about-wrap">
                                <h4>Morning Run</h4>
                                <p>Get your calorie burn right.</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-6"></div>
                            <div className="mix-about-wrap">
                                <h4>Driving - Nature</h4>
                                <p>Drive with the sounds of nature</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-11"></div>
                            <div className="mix-about-wrap">
                                <h4>Dance - Romance</h4>
                                <p>Look who can still dance</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-12"></div>
                            <div className="mix-about-wrap">
                                <h4>Focus - Study</h4>
                                <p>To maximize your focus...</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-7"></div>
                            <div className="mix-about-wrap">
                                <h4>Chill Hangout</h4>
                                <p>Elevate your hangout spot</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-5"></div>
                            <div className="mix-about-wrap">
                                <h4>Gym</h4>
                                <p>Squeeze your swaet out...</p>
                            </div>
                        </div>
                        <div className="mix-card-container">
                            <div className="mix-thumbnail-container" id="thumbnail-13"></div>
                            <div className="mix-about-wrap">
                                <h4>Drive</h4>
                                <p>Experience the G-Force</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            {/* playlist section view */}
            <section id="main-playlist-page-1" className="main main-playlist-view" style={{ display: isPlaylistPageVisible ? 'flex' : 'none' }}>
                <div className="top-playlist-container">
                    <button id="back-btn" onClick={handleBackBtnClick}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10.5L13.5 19L14.8222 17.5833L7.83333 10.5L14.8222 3.41667L13.5 2L5 10.5Z" fill="black"/>
                        </svg>
                    </button>
                    <div className="playlist-thumbnail-container" id='artist-1'></div>
                    <div className="about-playlist">
                        <p>Playlist</p>
                        <h1>Release Radar</h1>
                        <p>Catchall the latest music from artist you follow, plus new singles picked for you. Updates every Friday.</p>
                        <p>Made for you --- 27 songs, about 2hrs</p>
                    </div>
                </div>
                <div className="bottom-playlist-container">
                    <div className="playlist-control-buttons">
                        <div className="bottom-playlist-right-buttons">
                            <div className="play-pause-btn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.75 10.1254C16.7505 10.3376 16.6961 10.5463 16.5921 10.7313C16.488 10.9162 16.3379 11.0711 16.1562 11.1809L4.9 18.0668C4.71022 18.183 4.49287 18.2464 4.27037 18.2506C4.04788 18.2547 3.82832 18.1993 3.63438 18.0902C3.44227 17.9828 3.28225 17.8262 3.17075 17.6364C3.05926 17.4467 3.00032 17.2306 3 17.0105V3.24023C3.00032 3.02014 3.05926 2.80411 3.17075 2.61435C3.28225 2.42459 3.44227 2.26795 3.63438 2.16055C3.82832 2.05144 4.04788 1.99609 4.27037 2.00021C4.49287 2.00433 4.71022 2.06778 4.9 2.18398L16.1562 9.06992C16.3379 9.17967 16.488 9.33455 16.5921 9.5195C16.6961 9.70445 16.7505 9.91318 16.75 10.1254Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                        <div className="bottom-playlist-left-buttons">

                        </div>
                    </div>

                    <div className="songs-wrap">
                        <div className="songs-titles-wrap">
                            <div className="title-details coloumn-1">
                                <p>#</p>
                            </div>
                            <div className="title-details coloumn-2">
                                <p>Title</p>
                            </div>
                            <div className="title-details coloumn-3">
                                <p>Album</p>
                            </div>
                            <div className="title-details coloumn-4">
                                <p>Date added</p>
                            </div>
                            <div className="title-details coloumn-5">
                                <p>Duration</p>
                            </div>
                        </div>
                        <div className="song-container-wrap">
                            <p className="coloumn-1 details-padding">1</p>
                            <div className="coloumn-2 details-padding">
                                <div className="song-image"></div>
                                <div className="song-title">
                                    <h4>{songs[0].title}</h4>
                                    <p>{songs[0].artist}</p>
                                </div>
                            </div>
                            <p className="coloumn-3 details-padding">{songs[0].album}</p>
                            <p className="coloumn-4 details-padding">{songs[0].dateadded}</p>
                            <p className="coloumn-5 details-padding">{songs[0].duration}</p>
                        </div>
                        <div className="song-container-wrap">
                            <p className="coloumn-1 details-padding">2</p>
                            <div className="coloumn-2 details-padding">
                                <div className="song-image"></div>
                                <div className="song-title">
                                    <h4>{songs[1].title}</h4>
                                    <p>{songs[1].artist}</p>
                                </div>
                            </div>
                            <p className="coloumn-3 details-padding">{songs[1].album}</p>
                            <p className="coloumn-4 details-padding">{songs[1].dateadded}</p>
                            <p className="coloumn-5 details-padding">{songs[1].duration}</p>
                        </div>
                        <div className="song-container-wrap">
                            <p className="coloumn-1 details-padding">2</p>
                            <div className="coloumn-2 details-padding">
                                <div className="song-image"></div>
                                <div className="song-title">
                                    <h4>{songs[2].title}</h4>
                                    <p>{songs[2].artist}</p>
                                </div>
                            </div>
                            <p className="coloumn-3 details-padding">{songs[2].album}</p>
                            <p className="coloumn-4 details-padding">{songs[2].dateadded}</p>
                            <p className="coloumn-5 details-padding">{songs[2].duration}</p>
                        </div>
                        <div className="song-container-wrap">
                            <p className="coloumn-1 details-padding">2</p>
                            <div className="coloumn-2 details-padding">
                                <div className="song-image"></div>
                                <div className="song-title">
                                    <h4>{songs[3].title}</h4>
                                    <p>{songs[3].artist}</p>
                                </div>
                            </div>
                            <p className="coloumn-3 details-padding">{songs[3].album}</p>
                            <p className="coloumn-4 details-padding">{songs[3].dateadded}</p>
                            <p className="coloumn-5 details-padding">{songs[3].duration}</p>
                        </div>
                        <div className="song-container-wrap">
                            <p className="coloumn-1 details-padding">2</p>
                            <div className="coloumn-2 details-padding">
                                <div className="song-image"></div>
                                <div className="song-title">
                                    <h4>{songs[4].title}</h4>
                                    <p>{songs[4].artist}</p>
                                </div>
                            </div>
                            <p className="coloumn-3 details-padding">{songs[4].album}</p>
                            <p className="coloumn-4 details-padding">{songs[4].dateadded}</p>
                            <p className="coloumn-5 details-padding">{songs[4].duration}</p>
                        </div>
                    </div>
                </div>


            </section>


        </section>

        {/* footer section */}
        <footer className="footer">

            {/* left container */}
            <div className='song-details'>

                <div className='song-thumbnail-container' id='thumbnail-11'>
                </div>

                <div className='song-content'>
                    <h4>{songs[0].title}</h4>
                    <p>{songs[0].artist}</p>
                </div>

            </div>

            {/* music player controls */}
            <div className="player">

            <audio preload="none" controls>
            <source src="src\assets\Muzumathi A.R. Rahman.mp3" type="audio/mpeg" />
            </audio>
                
            </div>

            {/* right controls */}
            {/* <div className='controls'>
            
            </div> */}

        </footer>



    </div>


  );
}


export default SinglePage;
