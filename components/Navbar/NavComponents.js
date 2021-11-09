import navbarStyle from '../cssComponents/navbar.module.css';
import Link from 'next/link';
import {FaBars} from 'react-icons/fa';


export function Nav(props){
    return (
        <div className={navbarStyle.nav}>
            {props.children}
        </div>
    )
}

export function NavItem(props){
    return (
        <Link href={props.route}>
            <div className={navbarStyle.navItem}>
                {props.children}
            </div>
        </Link>
    )
}

export function Bar(props){
    return (
        <div className={navbarStyle.bar}>
            <FaBars/>
        </div>
    )
}

export function Logo(props){
    return (
        <Link href={props.route}>
            <div className={navbarStyle.logoContent}>
                <div className={navbarStyle.logo}>
                    {props.children} 
                </div>
                <div className={navbarStyle.logoName}>
                    {props.name}
                </div>
            </div>
        </Link>
    )
}

export function NavMenu(props){
    return (
        <div className={navbarStyle.navMenu}>
            {props.children}
        </div>
    )
}