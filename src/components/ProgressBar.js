import React, { useState, useEffect } from 'react';
import "./ProgressBar.css";

const ProgressBar = ({ targetProgress }) => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      if (progress < targetProgress) {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const nextProgress = prevProgress + 1;
            if (nextProgress >= targetProgress) {
              clearInterval(interval); // Stop the interval when reaching the target
              return targetProgress;  // Ensure the progress doesn't exceed the target
            }
            return nextProgress;
          });
        }, 5); // Adjust the speed of the animation by modifying this interval time
  
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }
    }, [progress, targetProgress]);
  
    return (
      <div className="progress-bar-container">
        <div className="progress-bar blinking" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    );
  };
  
  export default ProgressBar;