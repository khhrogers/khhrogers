import {Link} from "react-router-dom";
import React from 'react';
import * as userService from '../components/utilities/user-service'

export default function Navbar ({user, setUser}) {
   
    function handleLogOut() {
        userService.logOut()
        // Update App.js state to null
        setUser(null)
      }
    
   
   
   return (
<nav>

<Link to="/travel">Search Hotel</Link>
      &nbsp; | &nbsp;
      <Link to="/travel/alert">Alerts</Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
  </nav>
    );
}