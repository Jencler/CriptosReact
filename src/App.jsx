import { useEffect, useState } from "react"
import axios from "axios";
import "./App.css"

function App() {

  const [criptos,setCriptos] = useState()
  
  useEffect(()=> {
    //La url de la API que vamos ha usar

    const URL_API = import.meta.env.VITE_API_URL; 
    axios.get(`${URL_API}assets`)
    .then((data) =>{    
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("La peticion fallo")
    })
  },[]) 

  if(!criptos) return <>
    <span>Cargando...</span>
  </>

  return (
    <>
    <div className="main_content">
      <h1>Lista de criptos</h1>
      <div className="cajas">
      <ol className="lista">
          {
            criptos.map(({id,name, priceUsd, symbol,explorer}) =>(
              <li key={id} >
                <span>Nombre: {name}</span>
                <span>Precio: ${priceUsd}</span>
                <span>Simbolo: {symbol}</span>
                <span>Web: <a href={explorer} >{name}</a></span>
                </li>
            ))
          }
      </ol>
      </div>
    </div>
    </>
  )
}

export default App
