import React, { useState } from 'react';
import { SimpleCounter, SearchBox } from '@@components';
import { ThemeProvider } from './ThemeProvider.tsx';

import styles from './App.module.scss';
import './design/theme.scss';

function App() {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.value;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme} prefix="ds">
      <header>
        Select theme:
        <button onClick={handleThemeChange} value="default">
          Default
        </button>
        <button onClick={handleThemeChange} value="dark">
          Dark
        </button>
      </header>

      <div className={styles.section}>
        <header className={styles.section__header}>Button counter</header>
        <SimpleCounter />
      </div>

      <div className={styles.section}>
        <SearchBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
