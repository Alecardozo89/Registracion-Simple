import { useState } from "react";


export function Registracion({setNombre}) {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(usuario === "" || contraseña === ""){
          setError(true)
          return
        }
        setError(false)
        setNombre([nombre])
    }
  
    return (
        <>
            <form className="formPrincipal" onSubmit={handleSubmit}>
              
              <h1 >Registrarse</h1>

              <label>Nombre: </label>
              <input type="text" 
                     value={usuario}
                     onChange={event => setUsuario(event.target.value)} /> <br/>

              <label>Apellido: </label>
              <input type="text" 
                     value={usuario}
                     onChange={event => setUsuario(event.target.value)} /> <br/>

              <label>Email: </label>
              <input type="text" 
                     value={usuario}
                     onChange={event => setUsuario(event.target.value)} /> <br/>

              <label>Telefono: </label>
              <input type="text" 
                     value={usuario}
                     onChange={event => setUsuario(event.target.value)} /> <br/>

              <label>Contraseña: </label>
              <input type="password"
                     value={contraseña}
                     onChange={event => setContraseña(event.target.value)}/> <br/>

              <label>Confirmar contraseña: </label>
              <input type="password"
                     value={contraseña}
                     onChange={event => setContraseña(event.target.value)}/> <br/>

              <button className="btnPrincipales">Registrarse</button> <br />
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
        </>
    )
}

