import React, { useEffect, useState } from 'react';


function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="theme-toggle" aria-label="Basculer le thème" onClick={toggleTheme}>
      <i className="fas fa-adjust"></i>
    </button>
  );
}

export default ThemeToggle;