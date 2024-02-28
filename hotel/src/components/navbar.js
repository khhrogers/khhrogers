import {Link} from "react-router-dom";

export default function Navbar () {
    return (
<nav>

<Link to="/travel">Search Hotel</Link>
      &nbsp; | &nbsp;
      <Link to="/travel/alert">Alerts</Link>
  </nav>
    );
}