import React, { useEffect, useState } from 'react';

function ThemeToggle () {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button id="theme-toggle" onClick={toggleTheme}>
      Changer de thème
    </button>
  );
};

export default ThemeToggle;