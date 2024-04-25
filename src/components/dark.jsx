import React, { useState } from 'react';
import day from '../images/day.png'
import night from '../images/night.png'



function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(prevMode => !prevMode);
      document.documentElement.classList.toggle('dark-mode'); 

    };
  
    return (
      <div className="dark-mode-toggle">
        {isDarkMode ? (
          <img
            src={night}
            onClick={toggleDarkMode}
          />
        ) : (
          <img
            src={day}
            onClick={toggleDarkMode}
          />
        )}
      </div>
    );
  }
  
  export default DarkModeToggle;