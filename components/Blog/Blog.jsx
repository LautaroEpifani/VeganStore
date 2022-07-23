import dataBlog from './dataBlog';
import dataBlog2 from './dataBlog2';
import dataBlog3 from './dataBlog3';
import Image from 'next/image'



const Blog = () => {


    return (

        
        <>  
        <div className="Blog h-screen">
        <div className="blog mx-auto  w-4/5 md:w-4/5 mt-14">
            <div className="titulo_dos text-center font-Kaushan font-extrabold text-4xl mb-20">
                <p>Nuestras Recetas</p>
            </div>
            
            <div className="grid grid-cols-4 grid-rows-2">



           



                {dataBlog.map(articulo => (
                
                
                <div key={articulo.index} className=" col-span-2 row-span-1  border-b-2 border-solid border-gray-400 mr-4 overflow-hidden my-8 flex " >
                    <div className="texto  w-full xl:w-1/2 ml-4 mb-4 ">
                    <h2 className="resenia  mb-10">{articulo.tipo}</h2>
                    <h1 className="autor text-3xl font-bold">{articulo.titulo}</h1>
                    <h1 className="titulo text-2xl mt-5">{articulo.subtitulo}</h1> 
                    <h2 className="por font-bold mb-1">{articulo.autor}</h2>
                    <h2 className="breve mb-36">{articulo.texto}
                    </h2>
                    {/* <a className="leermas underline" href=".">Leer mas</a> */}
                    </div>
                    <div className="imagen  ml-10  hidden xl:inline-block ">
                    <Image className="w-44 border-4 border-gray-300" src="/imageBlog/tofuPesto.jpg" alt="" width={200} height={200}/>
                    </div>
               
                    
                </div>
                 ))
                }



             {dataBlog2.map((articulo2, index) => (
                <div key={articulo2.index} className="col-span-1 row-span-2  h-auto px-4 border-l-2 border-solid border-gray-400 overflow-hidden flex flex-col items-center my-8 pb-2" >
                    <div className="texto flex-col justify-between w-full mx-auto mb-4">
                    <h2 className="resenia  mb-2">{articulo2.tipo}</h2>
                    <h1 className="autor text-3xl font-bold">{articulo2.titulo}</h1>
                    <h1 className="titulo text-2xl mt-5">{articulo2.subtitulo}</h1> 
                    <h2 className="por font-bold mb-1">{articulo2.autor}</h2>
                    <h2 className="breve mb-10">{articulo2.texto}
                    </h2>
                    {/* <a className="leermas underline" href=".">Leer mas</a> */}
                    </div>
                    <div className="imagen  hidden xl:inline-block">
                    <Image className="w-full border-4 border-gray-300" src={`/imageBlog/im${index + 1}.jpg`} alt="" width={300} height={200}/>
                    </div>
                
                </div>
                   ))}  

                {dataBlog3.map(articulo => (
                
                
                <div key={articulo.index} className=" col-span-2 row-span-1  border-b-2 border-solid border-gray-400 mr-4 overflow-hidden my-8 flex " >
                    <div className="texto  w-full xl:w-1/2 ml-4 mb-4 ">
                    <h2 className="resenia  mb-10">{articulo.tipo}</h2>
                    <h1 className="autor text-3xl font-bold">{articulo.titulo}</h1>
                    <h1 className="titulo text-2xl mt-5">{articulo.subtitulo}</h1> 
                    <h2 className="por font-bold mb-1">{articulo.autor}</h2>
                    <h2 className="breve mb-2">{articulo.texto}
                    </h2>
                    {/* <a className="leermas underline" href=".">Leer mas</a> */}
                    </div>
                    <div className="imagen  ml-10   hidden xl:inline-block">
                    <Image className="w-44 h-3/4 border-4 border-gray-300" src="/imageBlog/recetaV.jpg" alt="" width={200} height={200}/>
                    </div>
               
                    
                </div>
                 ))
                }

                
            
                   
                </div>
                


                
            </div>
        </div>
        </>   
            
                    
    )
    
    
}

export default Blog
