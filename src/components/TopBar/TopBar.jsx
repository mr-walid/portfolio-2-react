import './topBar.scss';
import {Person,Mail} from "@material-ui/icons"

export default function TopBar({ menuOpen, setMenuOpen} ) {

return (
<div className={"TopBar " + (menuOpen && "active") }>
          <div className="wrapper">
            <div className="left">   
              <a href="#Works" className='logo'>Walid-kun.</a>
              <div className="itemContainer">
                <Person className='icon' />
                <span>+2126 34198690</span>
              </div>
              <div className="itemContainer">
                <Mail className='icon' />
                <span>walid1997zaidoun@gmail.com</span>
              </div>
            </div>
            <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> 
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
          </div>
        </div>
);
  
}
