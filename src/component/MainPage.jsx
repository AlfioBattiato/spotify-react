import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import AlbumCard from './AlbumCard';
import { useSelector } from 'react-redux';

function MainPage() {

  const search = useSelector(state => state.search.data)

  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hip, setHip] = useState([]);


  const handleSection = async (artistName, state) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
        artistName,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (response.ok) {
        let { data } = await response.json()

        state(data)


      } else {
        throw new Error('Error in fetching songs')
      }
    } catch (err) {
      console.log('error', err)
    }
  }


  useEffect(() => {
    handleSection('queen', setRock)
    handleSection('katyperry', setPop)
    handleSection('eminem', setHip)
  }, [])






  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className=''>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#/">TRENDING</a>
          <a href="#/">PODCAST</a>
          <a href="#/">MOODS AND GENRES</a>
          <a href="#/">NEW RELEASES</a>
          <a href="#/">DISCOVER</a>
        </Col>
      </Row>
      <Row className='mt-5'>
        <div className="row" ></div>
        {search && search.length > 0 && (
          <>
            <h2 className='text-white'>Search Results</h2>
            {search.slice(0, 4).map((e, index) =>
              <AlbumCard songInfo={e} key={index}></AlbumCard>
            )}
          </>
        )}

      </Row>
      <Row className='mt-5'>
        <h2 className='text-white'>Rock Classics</h2>
        <div className="row"></div>
        {rock && rock.length > 0 && (
          rock.slice(0, 4).map((e, index) =>
            <AlbumCard songInfo={e} key={index} ></AlbumCard>

          )
        )}


      </Row>
      <Row className='mt-5'>
        <h2 className='text-white'>Pop Culture</h2>
        <div className="row" ></div>
        {pop && pop.length > 0 && (
          pop.slice(0, 4).map((e, index) =>
            <AlbumCard songInfo={e} key={index} ></AlbumCard>

          )
        )}
      </Row>
      <Row className='mt-5'>
        <h2 className='text-white'>#HipHop</h2>
        <div className="row"></div>
        {hip && hip.length > 0 && (
          hip.slice(0, 4).map((e, index) =>
            <AlbumCard songInfo={e} key={index} ></AlbumCard>

          )
        )}
      </Row>
    </div>
  );
}

export default MainPage;
