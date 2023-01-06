import { useEffect, useState } from "react"
import axios from "axios";

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
    <h1>Lista de criptos</h1>
    <ol>
      {
        criptos.map(({id,name, priceUsd}) =>(
          <li key={id} >Nombre: {name} Precio:{priceUsd}</li>
        ))
      }
    </ol>
    </>
  )
}

export default App
