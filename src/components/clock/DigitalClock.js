import React from 'react';
import './DigitalClock.css';

const DigitalClock = props => {
    const [date, setDate] = React.useState(new Date());
    const localetime = date.toLocaleTimeString('en-HK',{hour:'2-digit', minute:'2-digit'}).split(" ");
    const localetimehhmm = localetime[0].split(":");
    const hh = localetimehhmm[0];
    const mm = localetimehhmm[1];
    const ampm =  localetime[1].toUpperCase();

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
        <div className="timeblock">
          <span className="time-hours">{hh}</span>
          <span className="time-semicolon">:</span>
          <span className="time-minutes">{mm}</span>
          <span className="time-am-pm">{ampm}</span>
        </div>
        <div className="date">{date.toLocaleDateString("en-HK",{ dateStyle:'medium' })}</div>
      </div>
      );
  }

  export default DigitalClock;
  
