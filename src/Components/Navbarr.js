import { Link } from "react-router-dom";

const Navbarr = () => {
  
  
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            
            <img src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png" alt="logo"/>
          </div>
          
          <div className="nav-elements" >
            <ul class="menu-items">
              <Link  to='/home'> <li>Home</li></Link>
            
              
             <Link  to='/movies'> <li>
                Movies
              </li></Link>
              
              <Link  to='/playlist'><li>
               Play List
              </li></Link>
              <li>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbarr
  
 
 
 
  
