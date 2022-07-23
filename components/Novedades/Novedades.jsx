  import { useState } from "react"
import dataNovedades from './dataNovedades';
import Image from 'next/image'





const Novedades = (props, width, height) => {

    const [novIndex, setNovIndex] = useState(1);

   
    
   
    

    const index = 0;


    const moveDot = index => {

        setNovIndex(index)
    }


    return (
         <div className="contenedor_novedades relative mt-10 h-screen mb-10">   
         <div className="titulo_dos text-center font-Kaushan font-extrabold text-4xl">
                         <p className="">Novedades </p>
                </div> 
         {/* bg-gray-200 */}
          <div className="novedades relative mx-auto  w-4/6    text-center bg-Alphonse4 bg-no-repeat bg-cover ">  
              

            <div  className={novIndex === index + 1 ? "nov block" : "nov absolute hidden"}>       
                <div  className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center h-full" >
                {dataNovedades.slice(0,6).map(libro =>   ( 

                    


                    // PROBAR BG-IMAGENES CON EL SIGNO $

                    //  A VER SI PODEMOS PONER LAS

                    
                    //   IMAGENES COMO BACKGROUND text-transparent hover:text-white text-start
                    
                    <div className="relative w-96  hover:bg-gray-400  text-slate-300 text-start text-opacity-100 mb-60 mt-20 rounded-lg"  key={libro.id}> 

                        

                        <div className="h-12 text-left">
                        
                            <h1 className=" font-semibold mt-2 font-sourceSans ">{libro.autor}</h1>
                            <h1 className=" font-bold   font-sourceSans ">{libro.nombre}</h1>
                            <h1 className="font-bold text-lg  font-rale ">{libro.precio }</h1>
                        
                        
                      
                        </div>

                        <div className="absolute top-0 bottom-10  w-full mx-auto h-full hover:opacity-20">
                        <Image  src={libro.imagen} alt="" width={400} height={300}
                        />
                        </div>
                        
                      
                    </div>
                    
                    ))} 
                </div>
            </div>


            <div  className={novIndex === index + 2 ? "nov block" : "nov absolute hidden"}>       
            <div  className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center h-full" >
                {dataNovedades.slice(6,12).map(libro =>   (
                    
                    <div className="relative w-96  hover:bg-gray-400  text-slate-300 text-start text-opacity-100 mb-60 mt-20 rounded-lg"  key={libro.id}> 

                        

                    <div className="h-12 text-left">
                    
                        <h1 className=" font-semibold mt-2 font-sourceSans ">{libro.autor}</h1>
                        <h1 className=" font-bold   font-sourceSans ">{libro.nombre}</h1>
                        <h1 className="font-bold text-lg  font-rale ">{libro.precio }</h1>
                    
                    
                  
                    </div>

                    <div className="absolute top-0 bottom-10  w-full mx-auto h-full hover:opacity-20">
                    <Image  src={libro.imagen} alt="" width={400} height={300}
                    />
                    </div>
                    
                  
                </div>
                    
                    ))} 
                </div>
            </div>


            <div  className={novIndex === index + 3 ? "nov block" : "nov absolute hidden"}>       
            <div  className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center h-full" >
                {dataNovedades.slice(12,18).map(libro  =>   (
                    
                    <div className="relative w-96  hover:bg-gray-400  text-slate-300 text-start text-opacity-100 mb-60 mt-20 rounded-lg"  key={libro.id}> 

                        

                        <div className="h-12 text-left">
                        
                            <h1 className=" font-semibold mt-2 font-sourceSans ">{libro.autor}</h1>
                            <h1 className=" font-bold   font-sourceSans ">{libro.nombre}</h1>
                            <h1 className="font-bold text-lg  font-rale ">{libro.precio }</h1>
                        
                        
                      
                        </div>

                        <div className="absolute top-0 bottom-10  w-full mx-auto h-full hover:opacity-20">
                        <Image  src={libro.imagen} alt="" width={400} height={300}
                        />
                        </div>
                        
                      
                    </div>
                    
                    ))} 

                    
                


                </div>


                


            </div>


            <div className="contenedor-circ flex justify-center mx-auto gap-1 mt-5">
                     {Array.from({length:3}).map((item, index) => 

                    ( <div key={index}
                        onClick={() => moveDot(index + 1)}
                        className={novIndex === index + 1 ? "circ w-5 h-5 rounded-full border-2 border-solid border-white mx-1 my-0 bg-gray-900 " : "circ w-5 h-5 rounded-full border-2 border-solid border-white mx-1 my-0 bg-white"}>

                    </div>))}
                 </div> 



            
            

            </div>

               

                
         </div>

            )}
    


export default Novedades
