import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/AteaTampa.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import "./Menu.css";
 
 
 
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
 
  return (
 
    <header className="header">
 
      <div>
        <NavLink to="/" className={({isActve}) => (isActve) ? "active" : "logo"}>
        <img src={Logo} alt="logo" className="logo"/>
        </NavLink>
         
      </div>
 
      <nav className={`nav ${open ? "active" : ""}`}>
        <ul>
 
          <NavLink to="/" className={({isActve}) => (isActve) ? "active" : ""}>Home</NavLink>
          <NavLink to="/sobrenos" className={({isActve}) => (isActve) ? "active" : ""}>Sobre Nós</NavLink>
          <NavLink to="/bolosdepote" className={({isActve}) => (isActve) ? "active" : ""}>Meus Bolos</NavLink>
          <NavLink to="/meuspedidos" className={({isActve}) => (isActve) ? "active" : ""}>Meus Pedidos</NavLink>
          </ul>
      </nav>
       
      <form className="search-box">
          <input type="text" placeholder="Pesquisar..." />
 
          <button type="submit" className="search-button">
          <IoIosSearch />
          </button>
 
      </form>
 
      <div className="icons">
        <a>
        <NavLink to="/loginusuario" className={({isActve}) => (isActve) ? "active" : "user"}><HiOutlineUser /></NavLink>
         
        </a>
           
        <a>
        <NavLink to="/carrinho" className={({isActve}) => (isActve) ? "active" : "buy"}><MdOutlineShoppingCart /></NavLink>
        </a>
      </div>
     
      {/* Responsividade do Search, Menu Hamburguer */}
 
      <div className="mobile-responsive">
        {!searchOpen && (
          <div className="search-toggle" onClick={() => setSearchOpen(true)}>
            <IoIosSearch />
 
          </div>
        )}
       
        {searchOpen && (
          <form className="search-responsive open">
            <input type="text" placeholder="Pesquisar..." />
 
            <button type="submit" className="search-button">
              <IoIosSearch />
            </button>
 
          </form>
        )}
 
        <div className="icons-user">
          <a>
            <NavLink to="/loginusuario" className={({isActve}) => (isActve) ? "active" : "user"}><HiOutlineUser /></NavLink>
         </a>
        </div>
 
        <div className="hamburguer" onClick={() => setOpen(!open)}>
          <LuMenu />
        </div>
 
      </div>
 
 
    </header>
 
  )
}
 
export default Menu;