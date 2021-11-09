import {Nav, NavItem, Bar, NavMenu, Logo} from './NavComponents.js'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Logo route="/" name="Gabriel Pedrosa">
                    Logo
                </Logo>
                <Bar/>
                <NavMenu>
                    <NavItem route="/">Projetos</NavItem>
                    <NavItem route="/page">Contato</NavItem>
                    <NavItem route="/sobre">Sobre</NavItem>
                </NavMenu>

            </Nav>
        </div>
    )
}

export default Navbar;