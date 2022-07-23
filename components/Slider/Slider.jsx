import React, { useState } from 'react';

import Image from 'next/image'
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {

        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)

        }else if(slideIndex === dataSlider.length) {
                setSlideIndex(1)
        }

    }

    const prevSlide = () => {

        if(slideIndex !== 1) {
            setSlideIndex(slideIndex -1)
        }
        else if(slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }

    }


    const moveDot = index => {

        setSlideIndex(index)
    }



    return ( 


       
        


        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        
                        <div className="cartelito absolute left-40 w-2/5 h-auto text-black  bg-slate-300 bg-opacity-50 z-10 rounded-lg">
                        <p className="uno px-4 text-lg lg:text-xl mt-4 mb-2">{obj.textoCartel}</p>
                        <p className="dos px-4 text-xl lg:text-2xl font-bold">{obj.tituloCartel} </p>


                        {obj.textoBoton != null ? <button className="consulta text-sm lg:visible  mx-4 mt-4 mb-10 p-2 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale uppercase font-semibold">
                            { obj.textoBoton} </button> 
                    
                        : <p className="px-4 mt-2 mb-10">{obj.otroTexto}</p> }

                        
                            
                      
                        </div>
                        <Image src={`/imageSlider/im${index + 1}.jpg`} alt="" width={1920} height={950}/>
                    </div>
                )

            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            

            <div className="container-dots">
                {Array.from({length:3}).map((item, index) => 

                ( <div key={index}
                    onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active " : "dot "}>

                </div>))}
            </div>



        </div>
     );
}
 
export default Slider;