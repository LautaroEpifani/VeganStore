import React from 'react';
import Image from 'next/image'
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";



const BtnSlider = ({direction, moveSlide}) => {
   


    return ( 
        

        <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next'
        : "btn-slide prev"}>
            <Image src={direction === "next" ? rightArrow : leftArrow} alt=""/>
        </button>

        
        
     );
}
 
export default BtnSlider;