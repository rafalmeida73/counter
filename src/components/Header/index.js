import React from 'react';
import './styles.css';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import gitHub from '../../assets/img/github.svg'
import dark from '../../assets/img/dark.svg'


function Header() {
 return (
  <Navbar
   alignLinks="right"
   brand={<Link to="/" className="mine">Em busca da casa automatica</Link>}
   id="mobile-nav"
   menuIcon={<Icon>menu</Icon>}
   options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
   }}
  >

   <a href="/" title="Modo escuro">
    <img className="responsive-img" src={dark} alt="Modo escuro" />
   </a>

   <a href="https://github.com/rafalmeida73" title="Git Hub">
    <img className="responsive-img" src={gitHub} alt="GitHub" />
   </a>



  </Navbar>
 );
}

export default Header;