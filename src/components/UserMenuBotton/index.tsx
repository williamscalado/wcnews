import { FaArrowDown, FaUserAlt } from 'react-icons/fa';
import style from './index.module.scss';

export const UserMenuButton = () =>{
    return(
        <div className={style.containerUser}> 
            <div className={style.iconUser}><FaUserAlt color='#822e2e' /></div>
            <button className={style.buttonSing}> <span>Hi! Williams</span> <FaArrowDown color='#1a1717' /> </button>
        </div>
    )
}