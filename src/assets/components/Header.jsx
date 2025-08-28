import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName.fas['heart'] } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // <style>
  //   .logo a {
  //     color: #060000ff;
  //     text-decoration:none;
  //     fontSize: 25px;

  //   }
  // </style>
  return (
    <>
      <header>
        <nav class="navbar">
          <div>
            <NavLink to="/" class="logo">
              BookLovers
            </NavLink>
             <ul class="nav-links">
        <input type="search" placeholder="Search"/>
      
           
              <li>
                <NavLink to="/allBooks">All Books</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} beat />
                <NavLink to="/wishList-page">Wishlist</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
                <NavLink to="/cart-page">Cart</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <NavLink to="/login-page">Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <br />
      </header>
      <br />
    </>
  );
};

export default Header;
