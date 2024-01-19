import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </Link>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("memorials")}}><Link to='/memorials' style={{ textDecoration: 'none' }}>Memorials</Link>{menu==="memorials"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sculptures")}}><Link to='/sculptures' style={{ textDecoration: 'none' }}>Sculptures</Link>{menu==="sculptures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("artifacts")}}><Link to='/artifacts' style={{ textDecoration: 'none' }}>Artifacts</Link>{menu==="artifacts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='/about' style={{ textDecoration: 'none' }}>About</Link>{menu==="about"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        
      </div>
    </div>
  )
}

export default Navbar
