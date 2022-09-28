import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={"Menu " + (menuOpen && "active")}>      
       <ul>
            <li onClick={()=>setMenuOpen(false)}>
               <a href="#Intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                 <a href="#Portfolio">Portfolio</a> 
               </li>
            <li onClick={()=>setMenuOpen(false)}>  
                 <a href="#Works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                 <a href="#Testimonials">Testimonials</a>
            </li> 
            <li onClick={()=>setMenuOpen(false)}> 
              <a href="#contact">Contact</a>
            </li>
          
       </ul>
         </div>;
}
