import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Style.module.css';

import { useState, useEffect } from 'react';

type AvailableTheme = 'dark' | 'light';

export function Menu(){
    const [ theme, setTheme] = useState<AvailableTheme>('dark');


    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }



    // useEffect(() =>{
    //    console.log('useEffect sem dependencia', Date.now());
    // }) //Executado toda vez que o componente renderiza na tela

    // useEffect(() =>{
    //     console.log('useEffect com array de deps vazio', Date.now());
    // }, []) // Executa apenas quando o react monta  ocomponente na tela pela primeira vez

    useEffect(() =>{
        console.log('theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () =>{
        }
    }, [theme]) //executa apenas quando o valor de theme muda


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