import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Style.module.css';

import { useState } from 'react';

type AvailableTheme = 'dark' | 'light';

export function Menu(){
    const [ theme, setTheme] = useState<AvailableTheme>('dark');


    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        console.log('Clicado', Date.now())

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            return nextTheme;
        })
    }

    return (
    <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a href="#" className={styles.menuLink} aria-label='Home' title='Home'>
            <HouseIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Historico' title='Historico'>
            <HistoryIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Tema' title='Tema' onClick={handleThemeChange}>
            <SunIcon />
        </a>
    </nav>
    )
}