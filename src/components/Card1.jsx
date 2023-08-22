import React from 'react';
import "../css/main.css";

const Card1 = ({trainName, trainNumber, deptHours, deptMinutes, deptSeconds, seatsAvailable, sleeper, AC, delayedBy}) => {
    return (
        <div className='srada'>
        <div className='card'>
        <div class="container">
            <h4><b>{trainName} ({trainNumber})</b></h4>
            <div className='price'>
            <h4><b>Price:</b></h4> 
            <h4>Sleeper:{sleeper}</h4> 
            <h4>AC:{AC}</h4> 
            </div>
        </div>
        <div> 
            
            <h1 className='time'>Hours:{deptHours} Minutes:{deptMinutes} Seconds:{deptSeconds}</h1>
            
        </div>
        </div>
        </div>
  )
}

export default Card1