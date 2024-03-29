import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getlike } from '../redux/action/index'
import { removelike } from '../redux/action/index'


function PlayerControls() {
  const selector = useSelector(state => state.singleObj.data)
  const like = useSelector(state => state.singleObj.like)
  const dispatch = useDispatch();


  const changeDispatch=()=>{

    if(like.includes(selector.id)){
      dispatch(removelike(selector.id))
    }else{

      dispatch(getlike(selector.id))
    }
  }

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio-element");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };



  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <audio
        id="audio-element"
        src={selector.preview}
        type="audio/mpeg"
        onPlay={handlePlay}
        onPause={handlePause}
      ></audio>
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2 h-100">
          <Row className="h-100 ">

            <Col xs={2} md={2} className='text-center'>
              {selector.length !== 0 && (<img className="img-fluid" src={selector.album.cover_medium} alt="track" style={{ height: "5rem" }} />
              )}

            </Col>
            <Col xs={1} md={1} className='d-flex align-items-center ' onClick={()=>changeDispatch()}>
              {selector.length !== 0 && (like.includes(selector.id) ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-suit-heart-fill cursor" viewBox="0 0 16 16"
                >
                   <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                 </svg>
            ) : (  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-suit-heart cursor" viewBox="0 0 16 16"
            >
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>))

              }

            </Col>
            <Col xs={3} md={2} className=''>
              {selector.length !== 0 && (<>

                <p className='text-white m-0'>{selector.title.substring(0, 16)}...</p>
                <p className='text-white'>{selector.artist.name}...</p>
              </>)}
            </Col>
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#/">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#/">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#/" onClick={togglePlay}>
                  {isPlaying ? (
                    <img src="svgexport-11.svg " alt="pause" id="playBtn" className='text-secondary' />
                  ) : (
                    <img src="svgexport-18.svg" alt="play" id="pauseBtn" />
                  )}
                </a>
                <a href="#/">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#/">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PlayerControls;
