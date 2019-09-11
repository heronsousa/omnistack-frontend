import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import { getUser } from '../services/user';
import './Header.css'

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

class Header extends Component {
  
  render(){
    return (
      <header id='main-header'>
          <div className='header-content'>
              
              <Link to='/'>
                <img src={logo} alt='Logo'/>
              </Link>
              
              <Link to='/new'>
                <img src={camera} alt='Enviar publicação'/>
              </Link>    

              {isAuthenticated() ?
              <Link to='/perfil' style={{ textDecoration: 'none' }}> 
                <div>{ getUser() }</div>
              </Link>
              :
              <Link to='/login' style={{ textDecoration: 'none' }}> 
                <div>Entrar</div>
              </Link>}

          </div>
      </header>
    );
  }
}

export default Header;