import React from 'react'



const Video = () => {
  return (
    <div className="relative">
        
        <video className="w-full mx-auto opacity-50" autoPlay muted loop>
          
          <source src={'../video/loque.mp4'} type='video/mp4' />
          
        </video>

        <div className="absolute top-1/3 left-1/4 text-center">
            <div className=""> 
            <h2 className="title text-white font-Kaushan text-8xl mb-16 "> Yovanna Mendoza</h2>
            </div>
            <h2 className="subtitle text-white font-Kaushan text-4xl w-3/4">Nos brinda una de sus mejores y mas saludables recetas</h2>
            <button className="button bg-gray-300 p-4 rounded-lg font-Kaushan font-semibold mt-20">Ver video</button>
        </div>

    </div>
  )
}

export default Video