import { FaNewspaper } from 'react-icons/fa'
import style from './index.module.scss'

export const ButtonSignIn = () => {
    return(
    <>       
        <button className={style.buttonSing}> <FaNewspaper color='#FFF' /> Sing in whith Github</button>
    </>
    )
}