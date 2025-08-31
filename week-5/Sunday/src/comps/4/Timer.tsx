import { useState, useRef } from "react";

export default function TimerGood() {

  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef<number | null>(null); 

  const start = () => {
    if (intervalId.current === null) {
      const id = window.setInterval(() => setSeconds((p) => p + 1), 1000);
      intervalId.current = id; 
    }
  };

  const stop = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      setSeconds(0);            
    }
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>second : {seconds}</p>
    </div>
  );
}
