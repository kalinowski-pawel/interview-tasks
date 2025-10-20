import React, {useState} from "react";
import ButtonCounter from './components/ButtonCounter';
import {ThemeProvider} from "./ThemeProvider.tsx";

import styles from './App.module.scss';
import './design/theme.scss';

function App() {
    const [theme, setTheme] =  useState('default');

    const handleThemeChange = (e:  React.MouseEvent<HTMLButtonElement>) => {
        const newTheme = e.currentTarget.value;
        setTheme(newTheme);
    }

    return (
        <ThemeProvider theme={theme} prefix="ds">
            <header>
                Select theme:
                <button onClick={handleThemeChange} value="default">Default</button>
                <button onClick={handleThemeChange} value="dark">Dark</button>
            </header>

            <div className={styles.section}>
                <header className={styles.section__header}>Button counter</header>
                <ButtonCounter/>
            </div>
        </ThemeProvider>
    )
}

export default App
