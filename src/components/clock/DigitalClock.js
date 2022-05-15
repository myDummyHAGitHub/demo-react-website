import React from 'react';
import './DigitalClock.css';

const DigitalClock = props => {
    const [date, setDate] = React.useState(new Date());
  
   //Replaces componentDidMount and componentWillUnmount
   React.useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     return (
        <div>
          <h2 className="clock">The Time is now: {date.toLocaleTimeString()}.</h2>
        </div>
      );
  }

  export default DigitalClock;
  
