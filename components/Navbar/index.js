import { useState } from 'react'
import {Nav, NavItem, Bar, NavMenu, Logo, MobileNav} from './NavComponents.js'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const handleClickMobile = () => setClickMobile(false);
    return (
        <div>
            <Nav>
                <Logo route="/" name="Gabriel Pedrosa">
                    Logo
                </Logo>
                <Bar onClick={handleClick} click={click}/>

                <NavMenu onClick={handleClickMobile} click={click}>
                    <NavItem route="/">Projetos</NavItem>
                    <NavItem route="/page">Contato</NavItem>
                    <NavItem route="/sobre">Sobre</NavItem>
                </NavMenu>

            </Nav>
        </div>
    )
}

export default Navbar;