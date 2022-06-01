import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { ButtonSignIn } from '../ButtonSingIn'
import style from './style.module.scss'

export const Header = () => {

    const menuList = [
        {
            name: 'Home',
            link: '#',
            active: true
        },
        {
            name: 'News',
            link: '#',            
            active: false
        },
        {
            name: 'Contact',
            link: '#',            
            active: false
        },
    ]

return(
    <header className={style.headerContainer}>
        <div className={style.headerContent}>
             <nav className={style.menuMobile}>
                <FaBars width={25} height={25} />
            </nav>
            <Image src="/images/logo.png" alt="Wc News" width={150} height={40} quality={100} className={style.Logo} />
            <nav>
                <ul>{
                    menuList.map((data)=>{                    
                    return(
                    <li key={data.name}><a href={data.link} className={data.active ? style.isActive : ""}>{data.name}</a></li>                   
                        );
                    })
                }
                </ul> 
            </nav>
           
            <ButtonSignIn />
        </div>
        
    </header>
)
}