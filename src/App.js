import React from 'react';
import {Formulario,Label,GrupoInput,Input,LeyendaError,IconoValidacion} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

 const App = () => {
     return ( 
         <main>
             <Formulario action="">
             <div>
                 <Label htmlFor="">Usuario</Label>
                 <GrupoInput>
                 <Input type="texts" placeholder="Usuario"/>
                  <IconoValidacion icon={faCheckCircle}/>
                 </GrupoInput>
                 <LeyendaError>Lorem ipsum dolor sit amet</LeyendaError>
             </div>
             <div>
                 <p><FontAwesomeIcon icon={faExclamationTriangle}/><b>Error:</b>Por favor rellena el formulario correctamente</p>
             </div>
             <div>
                 <button type="submit">Ingresar</button>
                 
             </div>
             </Formulario>
         </main>
     );
 }
 
 export default App;