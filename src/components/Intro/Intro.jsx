import './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';



export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,
       {  
        backDelay: 1500,
        backSpeed: 60,
        showCursor:true,
        strings: ['Developer','Designer', 'Content Creator' ] })
  },[])
  return <div className='Intro' id='Intro' > 
               <div className="left">
                 <div className="imgContainer">
                   <img src="./img/image.png" alt="" />
                 </div>
               </div>
               <div className="right">
                 <div className="wrapper">
                   <h2>Hi there, My name is</h2>
                   <h1>Walid Zaidound</h1>
                   <h3>and i'm a <span ref={textRef}></span></h3>
                 </div>
                 <a href="#Portfolio">
                   <img src="./img/down.png" alt="" />
                 </a>
               </div>
     
         </div>
}
