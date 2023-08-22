import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    const [trains, setTrains] = useState([]); 
  return (
    <div>
       <Header/>
      <Link to={'/Second'}>View more</Link>
    </div>
  )
}

export default Home