import React from 'react';
import Logo from '../assets/SENAI.png'

function NavBar() {
  return (
    
    <nav className='menu'>
       <div className='logo'>
        <img src={Logo} alt="logo senai" width={180}/>
    </div>

    <div className='nav'>

        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/contato'>Contato</a></li>
            <li><a href='/quem'>Quem Somos</a></li>
        </ul>
    </div> 

    </nav>
    

  );
}

export default NavBar;
