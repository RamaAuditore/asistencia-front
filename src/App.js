import React,{useState} from 'react';
import {Formulario,ContenedorBotonCentrado,Boton,MensajeError,MensajeExito} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from './componentes/Input';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
 const App = () => {
     const[nombre,cambiarNombre] = useState({campo:'', valido:null});
     const[dni,cambiarDni] = useState({campo:'', valido:null});
     const[clave,cambiarClave] = useState({campo:'', valido:null});
     const[repitaclave,cambiarClave2] = useState({campo:'', valido:null});
     const[roles,cambiarRoles] = useState({campo:'', valido:null});
     const[formularioValido, cambiarformularioValido] =useState(null);

     const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,22}$/, // Letras y espacios, pueden llevar acentos.
        dni:/^.{10}$/, //Numeros
        clave: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros.
        roles: /^[a-z]{5,7}$/, // Letras
    }
    const validarClave2 =() =>{
        if(clave.campo.length > 0){
            if(clave.campo !== repitaclave.campo){
                cambiarClave2((prevState) =>{
                    return{...prevState,valido:'false'}
                });
            } else{
                cambiarClave2((prevState) =>{
                    return{...prevState,valido:'true'}
                });
            }

            
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(
            nombre.valido ==='true' &&
           dni.valido === 'true' &&
           clave.valido === 'true' &&
           repitaclave.valido === 'true' &&
           roles.valido === 'true'           
        ){
           cambiarformularioValido(true);
           cambiarNombre({campo: '', valido: null});
           cambiarDni({campo: '', valido: null});
           cambiarClave({campo: '', valido: null});
           cambiarClave2({campo: '', valido: null});
           cambiarRoles({campo: '', valido: null});
        } else{
            cambiarformularioValido(false);
        }
    }
     return ( 
         <main>
             <Formulario action="" onSubmit={onSubmit}>
                <Input
                  estado={nombre}
                  cambiarEstado={cambiarNombre}
                  tipo="text"
                  label="Nombre"
                  placeholder="Ingrese su Nombre"
                  name="nombre"
                  leyendaError="El Nombre tiene que ser de 4 a 16 digitos y solo puede contener letras"
                  expresionRegular={expresiones.nombre}
                />
                <Input
                estado={dni}
                cambiarEstado={cambiarDni}
                tipo="text"
                label="DNI"
                placeholder="Documento Nacional de Identidad"
                name="dni"
                leyendaError="El DNI debe contener no mas de 8 numeros y debe incluir ."
                expresionRegular={expresiones.dni}
              />
               <Input
                estado={clave}
                cambiarEstado={cambiarClave}
                tipo="password"
                label="clave"
                placeholder="clave"
                name="clave"
                leyendaError="la clave puede contener de 6 a 12 caracteres entre Letras y Numeros"
                expresionRegular={expresiones.clave}
              />
              <Input
                estado={repitaclave}
                cambiarEstado={cambiarClave2}
                tipo="password"
                label="repetir clave"
                placeholder="repita la clave"
                name="repetir clave"
                leyendaError="la clave no es la misma"
                expresionRegular={expresiones.clave}
                funcion={validarClave2}
              />
              <Input
                estado={roles}
                cambiarEstado={cambiarRoles}
                tipo="text"
                label="roles"
                placeholder="inserte Rol"
                name="Roles"
                leyendaError="el rol solo puede ser Admin o Student"
                expresionRegular={expresiones.clave}
              />
              
                

             {formularioValido === false && <MensajeError>
                 <p>
                     <FontAwesomeIcon icon={faExclamationTriangle}/>
                     <b>Error:</b>Por favor rellena el formulario correctamente
                     </p>
             </MensajeError>}
             <ContenedorBotonCentrado>
                 <Boton type="submit">Ingresar</Boton>
                 {formularioValido === true && <MensajeExito>datos ingresado correctamente</MensajeExito>}         
             </ContenedorBotonCentrado>
             
             </Formulario>
         </main>
     );
 }
 
 export default App;