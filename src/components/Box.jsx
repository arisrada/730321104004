import React from 'react';
import Card1 from './Card1';

const Box = () => {

    const arr = [
        {"trainName": "Chennai Exp", "trainNumber":"2344","deptHours":21,"deptMinutes":35,"deptSeconds":0,"seatsAvailable":{"sleeper":3,"AC":1},"sleeper":2, "AC":5,"delayedBy":15},
        {"trainName": "Hyderabad Exp", "trainNumber":"2341","deptHours":23,"deptMinutes":55,"deptSeconds":0,"seatsAvailable":{"sleeper":6,"AC":7},"sleeper":554, "AC":1854 ,"delayedBy":5}
]
    return (
    <div>
        {arr.map((data, index) => {
            return(
                <Card1 key={index} trainName={data.trainName} trainNumber={data.trainNumber} deptHours={data.deptHours} deptMinutes={data.deptMinutes} deptSeconds={data.deptSeconds} seatsAvailable={data.seatsAvailable} sleeper={data.sleeper} AC={data.AC} delayedBy={data.delayedBy}/>
            )
        })}
    </div>
  )
}

export default Box