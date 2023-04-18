// css
import './Navbar.css'

// react
import { useState, useRef } from 'react'

// React router dom
import { NavLink, Link } from "react-router-dom"

// react icons
import { AiFillHome, AiOutlineSearch, AiFillPlusSquare, AiTwotoneHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'
import { BsSpotify } from 'react-icons/bs'


const Navbar = () => {

    const dropMenuMobile = useRef(null)

    const [ openMobile, setOpenMobile ] = useState(false)

    /* abrir o menu mobile */
    const handleOpenMobile = () => setOpenMobile(true)

    /* fechar menu mobile */
    const handleCloseMobile = () => {

        setOpenMobile(false)

    }

  return (
    <div>
        <nav className='nav'>
            <div className="img-logo">
                <Link>
                    < BsSpotify /> <h2> Spotify </h2>
                </Link>
            </div>
            <div className="menu-desktop">
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <div>
                                < AiFillHome />
                            </div>
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/buscar' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <div>
                                < AiOutlineSearch />    
                            </div> 
                            Buscar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/biblioteca' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <div>
                                < VscLibrary />
                            </div>
                            Sua biblioteca
                        </NavLink>
                    </li>
                </ul>
                <div className="add-music">
                    <ul>
                        <li>
                            <Link>
                                <div>
                                    < AiFillPlusSquare />
                                </div>
                                Criar playlist
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div>
                                    < AiTwotoneHeart />    
                                </div> 
                                Músicas Curtidas 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-menu-mobile">
                <div className="nav-mobile-search">
                    < AiOutlineSearch />
                </div>
                <div className="btn-app">
                    <button><h4>ABRIR O APP</h4></button>
                </div>
                <div className="btn-menu-mobile">
                    < AiOutlineMenu onClick={handleOpenMobile}/>
                </div>
            </div>
        </nav>

        {/* área do menu mobile, so ativa quando chegar em 702pixels */}
        <div ref={dropMenuMobile} className={`menu-mobile ${openMobile ? 'menu-active' : 'menu-inactive'}`}>
            <div className="close-menu-mobile">
                < AiOutlineClose  onClick={handleCloseMobile}/>
            </div>
                <ul className='menu-mobile-login-register'>
                    <li>
                        <Link>
                             <h2>Entre</h2>
                        </Link>
                    </li>
                    <li>
                        <Link>
                             <h2>Inscreva-se</h2>
                        </Link>
                    </li>
                </ul>
                <div className="menu-mobile-divisor"></div>
            <div>
                <ul className='menu-mobile-outros'>
                    <li>
                        <Link>
                             <h4>Premium</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                             <h4>Ajuda</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                             <h4>Baixar</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                             <h4>Privacidade</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <h4>Condições</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar