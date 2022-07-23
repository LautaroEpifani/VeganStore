import React from 'react'

import { useContext } from 'react';
// import CartContext from "../context/CartContext";
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react';



const Productos = () => {



      //const {addItemToCart} = useContext(CartContext)

  

      const data = [

            {id: 1, nombre: 'Lasaña de Verduras', autor: '', imagen: `/imageNov/v1.png`, precio: "3,00 €", valor: 3},
            {id: 2, nombre: 'Queso VioLife', autor: '', imagen: `/imageNov/v2.png`, precio: "3,00 €", valor: 3},
            {id: 3, nombre: 'Queso Sheese', autor: '', imagen: `/imageNov/v3.png`, precio: "2,50 €", valor: 2.5},
            {id: 4, nombre: 'Bocados Heura', autor: '', imagen: `/imageNov/v4.png`, precio: "4,00 €", valor: 4},
            {id: 5, nombre: 'Nuggets Gourmet', autor: '', imagen: `/imageNov/v5.png`, precio: "3,50 €", valor: 3.5},
            {id: 6, nombre: 'Burger Gourmet', autor: 'Camus', imagen: `/imageNov/v6.png`, precio: "3,50 €", valor: 3.5},
            {id: 7, nombre: 'Lasaña de Verduras', autor: '', imagen: `/imageNov/v1.png`, precio: "3,00 €", valor: 3},
            {id: 8, nombre: 'Queso VioLife', autor: '', imagen: `/imageNov/v2.png`, precio: "3,00 €", valor: 3},
            {id: 9, nombre: 'Queso Sheese', autor: '', imagen: `/imageNov/v3.png`, precio: "2,50 €", valor: 2.5},
            {id: 10, nombre: 'Bocados Heura', autor: '', imagen: `/imageNov/v4.png`, precio: "4,00 €", valor: 4},
            {id: 11, nombre: 'Nuggets Gourmet', autor: '', imagen: `/imageNov/v5.png`, precio: "3,50 €", valor: 3.5},
            {id: 12, nombre: 'Burger Gourmet', autor: 'Camus', imagen: `/imageNov/v6.png`, precio: "3,50 €", valor: 3.5},
            {id: 13, nombre: 'Lasaña de Verduras', autor: '', imagen: `/imageNov/v1.png`, precio: "3,00 €", valor: 3},
            {id: 14, nombre: 'Queso VioLife', autor: '', imagen: `/imageNov/v2.png`, precio: "3,00 €", valor: 3},
            {id: 15, nombre: 'Queso Sheese', autor: '', imagen: `/imageNov/v3.png`, precio: "2,50 €", valor: 2.5},
            {id: 16, nombre: 'Bocados Heura', autor: '', imagen: `/imageNov/v4.png`, precio: "4,00 €", valor: 4},
            {id: 17, nombre: 'Nuggets Gourmet', autor: '', imagen: `/imageNov/v5.png`, precio: "3,50 €", valor: 3.5},
            {id: 18, nombre: 'Burger Gourmet', autor: 'Camus', imagen: `/imageNov/v6.png`, precio: "3,50 €", valor: 3.5}
        
        
        
            
        ];








      //SETEAMOS LOS HOOKS
      const [users, setUsers] = useState([])
      const [search, setSearch] = useState("")
            



  
      const showData = () => {

            setUsers(data)


      }







      //FUNCION DE BUSQUEDA
      const searcher = (e) => {

            setSearch(e.target.value)
      }






       //METODO DE FILTRADO 2 OPTIMIZADO

      const results = !search ? users : users.filter((dato) => 
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()) )




  
      //USE EFFECT RENDERIZA LA FUNCION
      useEffect( () => {

      showData()

      }, [])

        



  return (

      <>
      <div className="div bg-slate-300">

          
           
        <div className="text-center font-Kaushan text-4xl mb-10">Productos</div>





      <div>

            <button className="boton w-auto  bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 ml-5 font-Kaushan p-2">
                        <Link href="/">
                              <a className="">Inicio</a>
                        </Link>
                  </button>
      </div>


        <div className="nav w-full md:w-1/2 mt-10 mx-auto">
          

       
              <input value={search} onChange={searcher} type="text" name="company-website" id="company-website" className="w-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent rounded font-rale" placeholder="Buscar productos"/>
                  {/* <button className="boton w-1/6  bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 rounded text-white font-rale ml-2">Buscar</button> */}
          </div> 


        {/* <div className="card text-center bg-white w-1/6 mx-auto rounded-lg">
            <div className=" bg-slate-300 rounded-lg">
                  <h3 className="font-black font-Kaushan text-xl py-2">Veganesa de Ajo </h3>
                  <h1 className=" mt-2 font-sourceSans ">Follow your heart</h1>
                  <p className="text-lg"> 4.5 €</p>
            </div>
            <div className=" rounded-lg h-52 relative">

                  <Image src={`/imageProductos/veganesa.jpg`} alt="" width={150} height={150}/>
                  <button href="#" className="absolute bottom-0 left-1/4 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale px-4 py-2">Agregar al Carrito</button>
            </div>
        </div> */}


         

        

        <div  className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center h-full" >
                {results.map(producto =>   ( 

                    
                  <>
                    <div className="card">
                    <div className="relative w-96  hover:bg-gray-400  text-slate-300 text-start text-opacity-100 mb-60 mt-20 rounded-lg"  key={producto.id}> 

                        

                        <div className="h-12 text-left ml-10">
                        
                            <h1 className=" font-semibold mt-2 font-sourceSans ">{producto.autor}</h1>
                            <h1 className=" font-bold   font-sourceSans ">{producto.nombre}</h1>
                            <h1 className="font-bold text-lg  font-rale ">{producto.precio }</h1>
                        
                        
                      
                        </div>

                        <div className="absolute top-0 bottom-10  w-full mx-auto h-full hover:opacity-20 text-center">
                        <Image  src={producto.imagen} alt="" width={400} height={300}
                        />
                        
                        
                        
                        </div>
                        
                      
                        </div>

                              {!producto.inCart ? (
                              <div className="Boton text-center">
                                    <button onClick={() => addItemToCart(producto)} href="#" className="mt-10 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale px-4 py-2">Agregar al Carrito</button>
                              </div>
                              ) : (
                                    <button>En el carrito</button>
                                  )}
                        </div>

                  </>
                    
                    ))} 
                </div>


           
            </div>
      </>






)

}

export default Productos
