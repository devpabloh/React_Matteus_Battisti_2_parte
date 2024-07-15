import { NavLink } from "react-router-dom";
import '../components/NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Produtos</NavLink>
        <NavLink to='/About'>Sobre</NavLink>
    </nav>
  )
}

export default NavBar