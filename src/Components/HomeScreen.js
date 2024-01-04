import React from 'react'
import "./ComponentStyles/HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import { NETFLIX_MOVIES, NOWPLAYING_API_URL, POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from '../Requests';
function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />
        <Row 
          title="Netflix Originals"
          fetchUrl={NETFLIX_MOVIES}
          isLargeRow
        />
        <Row 
          title="Top Rated"
          fetchUrl={TOPRATED_API_URL}
          isLargeRow
        />
        <Row 
          title="Now Playing"
          fetchUrl={NOWPLAYING_API_URL}
          isLargeRow
        />
        <Row 
          title="Popular"
          fetchUrl={POPULAR_API_URL}
          isLargeRow
        />
        <Row 
          title="Upcoming"
          fetchUrl={UPCOMING_API_URL}
          isLargeRow
        />
    </div>
  )
}

export default HomeScreen
