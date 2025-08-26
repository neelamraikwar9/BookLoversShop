import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName.fas['heart'] } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
    <header className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">BookLovers</NavLink>
          {/* <input className="ms-5 me-2" placeholder="Search" /> */}

         {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
                <NavLink to="/bookList" className="nav-link">Book List</NavLink>
              </li>
              </ul>
              <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><FontAwesomeIcon icon={faHeart} beat /></li>
        <li className='nav-item '><FontAwesomeIcon icon={faCartShopping} /></li>
        </ul>
            
          </div>
        {/* </div> */}
      </nav>
      <br/>
    </header>
    <br/>
      </>
  );
};

export default Header;
