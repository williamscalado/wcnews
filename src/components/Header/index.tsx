import { ButtonSignIn } from '../ButtonSingIn'
import style from './style.module.scss'

export const Header = () => {
return(
    <header className={style.headerContainer}>
        <div className={style.headerContent}>
            <img src="/images/logo.png" alt="Wc News" />
            <nav>
                <a href="" className={style.isActive}>Pagina Inicla</a>
                <a href="" >Notícias</a>
                <a href="">Contato</a>
            </nav>
            <ButtonSignIn />
        </div>
        
    </header>
)
}