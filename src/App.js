import React, { useEffect, useCallback } from "react";
import Routes from "./routes";

const App = () => {

  const hideScroll = useCallback(() => {
    document.body.classList.remove('show-scroll');
  }, []);

  useEffect(() => {
    const timeouts = [];
    document.addEventListener('mousemove', (e) => {
      document.body.classList.add('show-scroll');
        for (var i = 0; i < timeouts.length; i++) {
          clearTimeout(timeouts[i]);
        }

      // Start a new setTimeout to disable scoll after 3 seconds
      timeouts.push(setTimeout(hideScroll, 3000));
    });
  }, [hideScroll]);

  return (
    <Routes />
  );
}

export default App;