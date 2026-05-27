import { useState } from "react";
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
 
      <div className="logo">
          <img src={Logo} alt="logo" className="logo" />
      </div>
 
      <nav className={`nav ${open ? "active" : ""}`}>
        <ul>
 
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Meus Bolos</a></li>
          <li><a href="#">Meus Pedidos</a></li>
          </ul>
      </nav>
       
      <form className="search-box">
          <input type="text" placeholder="Pesquisar..." />
 
          <button type="submit" className="search-button">
          <IoIosSearch />
          </button>
 
      </form>
 
      <div className="icons">
        <a href="#" className="user">
          <HiOutlineUser />
        </a>
           
        <a href="#" className="buy">
          <MdOutlineShoppingCart />
        </a>
      </div>
     
      {/* Responsividade do Search, Menu Hamburguer */}
 
      <div className="mobile-responsive">
          <div className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
    <IoIosSearch />
        </div>
 
        <div className="hamburguer" onClick={() => setOpen(!open)}>
          <LuMenu />
        </div>
      </div>
 
 
      {
        searchOpen && (
        <form className="search-responsive">
          <input type="text" placeholder="Pesquisar..." />
 
          <button type="submit" className="search-button">
            <IoIosSearch />
          </button>
        </form>
      )}
 

    </header>

  )
}
 
export default Menu;