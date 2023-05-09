import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png';

import NavItem ,{NavItemDropDown} from './../../components/NavItem/NavItem';
const Header = () => {
    return(

        
        <div className="navbar navbar-expand-md navbar-dark cyborg-navbar ">
  <div className="container">
    <a className="navbar-brand" href="/">
        <img src={logo} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <NavItem className="nav-item">
          <Link to="/" className="nav-link ">Home</Link>
        </NavItem>
        <NavItem className="nav-item">
          <a className="nav-link" href="/#">Browse</a>
        </NavItem>
        <NavItem className="nav-item">
          <a className="nav-link" href="/#">Details</a>
        </NavItem>
        <NavItem className="nav-item">
          <a className="nav-link" href="/#">Streams</a>
        </NavItem>
        <NavItem className="nav-item">
        <Link to="/profile" className="nav-link ">Profile</Link>
        </NavItem>
       
      </ul>
      
    </div>
  </div>
</div>

       
    )
}

export default Header