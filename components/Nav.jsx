import React from 'react';
import logo from '../images/vacafeliz.jpg';
import conf from '../images/conf.png';
import Image from 'next/image'
import Link from 'next/link'


const Nav = () => {
    return ( 

        <div className="w-full mx-auto bg-FullF bg-no-repeat bg-cover h-screen">

    
      <nav className="flex justify-between  items-center">
          <div className="logo flex-initial p-6 pl-12 w-1/6 lg:justify-start md:ml-36 ml-8 mr-2 border-4 rounded-lg">
              <Image  src={logo} width={200} height={200} alt=""/>
              
          </div>
          
          {/* <div className="nav w-full md:w-1/2 lg:justify-start inline-block">
          <div className="text-gray-800 font-semibold font-Kaushan my-36 text-center text-4xl"></div>  
              <input type="text" name="company-website" id="company-website" className="w-4/6 bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent rounded font-rale" placeholder="Buscar productos"/>
                  <button className="boton w-1/6  bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale ml-2">Buscar</button>
          </div>  */}

          {/* <div className="usuario justify-self-end  mr-40 md:block hidden">
              <button  className="iniciar_sesion  w-3/6 bg-slate-300  hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded  font-sourceSans  text-xs lg:text-xl  text-black" >Iniciar sesión</button>
              
              <button className="registrarse  w-3/6 h-14 bg-teal-600  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded  font-sourceSans  text-xs lg:text-xl  text-white">¡Regístrate!</button>   
          </div> */}

          

      </nav> 
          <nav>
          <div className="links lg:block hidden w-5/6 mt-28 ml-48">
              <ul className="flex menu items-center justify-end">
                  <li className="link w-28 text-center text-lg font-Kaushan"> <Link href="/productos"><a>Productos</a></Link></li>
                  <li className="link w-28 border-r-2 border-l-2 border-gray-200  text-center  text-lg font-Kaushan"><a href="asd" >Recetas</a></li>
                  <li className="link w-28 text-center  text-lg font-Kaushan mx-4"><a className="a" href="asd">Encuentranos</a></li>
                  <li className="link w-28 border-r-2 border-l-2 border-gray-200  text-center  text-lg font-Kaushan"><a href="asd">Conócenos</a></li>
                  <li className="link w-28 text-center  text-lg font-Kaushan pr-4"><a  className="a" href="asd">+ Info</a></li>
              </ul>
          </div>
      </nav>
    </div>


     );
}
 
export default Nav;

