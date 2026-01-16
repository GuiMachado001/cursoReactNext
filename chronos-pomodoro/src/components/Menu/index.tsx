import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Style.module.css';

import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    const [ theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }


    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() =>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]) 


    return (
    <nav className={styles.menu}>
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
            {nextThemeIcon[theme]}
        </a>
    </nav>
    )
}