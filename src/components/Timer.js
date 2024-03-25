import React, { useEffect, useState } from "react";

const Timer = ({ hackathonDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endTime = new Date(hackathonDate);
      const timeDiff = endTime - now;

      if (timeDiff > 0) {
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining("Time expired!");
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [hackathonDate]);

  return <div>{timeRemaining}</div>;
};

export default Timer;
