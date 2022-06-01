import { FaKey } from 'react-icons/fa';
import { UserMenuButton } from '../UserMenuBotton';
import style from './index.module.scss';

export const ButtonSignIn = () => {
    const isUserLogin = true;
    return isUserLogin ?  
       <UserMenuButton />
   :
    <button className={style.buttonSing}> <FaKey color='#822e2e' /><span>Sing in</span> </button>
   ;
    
}