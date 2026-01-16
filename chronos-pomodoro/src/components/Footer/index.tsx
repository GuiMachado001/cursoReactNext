import styles from './Style.module.css';

export function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <a href="">Entenda como funciona a técnica pomodoro</a>
                <a href="https://guilhermemachadodev.netlify.app" target='_blank'>Guilherme Machado &copy; {new Date().getFullYear()} - feito com 💜 </a>
            </footer>
        </>
    )
}