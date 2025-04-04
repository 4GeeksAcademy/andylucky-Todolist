import React, { useEffect, useState } from "react";
import { Tarea } from "./Tarea";

//create your first component
export const ListaTareas = (props) => {

	  const [tareas, setTareas] = useState([]);
       const [inputValue, setInputValue] =useState("");
      let tareaNueva =  inputValue
	
	const handleKeyDown = (event) => {
		if(event.key==="Enter"){
		 setTareas([...tareas, tareaNueva])

		}

	}

	const envtoNewTarea = (indiceTarea) => {
		
		const nuevasTareas = [...tareas]
		nuevasTareas.splice(indiceTarea,1)
	    setTareas(nuevasTareas);
		
	}
	useEffect(() => {
		console.log("useEffect ejecutado. Tareas actuales:", tareas);
		document.querySelector(".container > input").value = "";

	}, [tareas]); 


	return (
		<div class="container d-flex cutomList">

			<input type="text" onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown}   placeholder="Añadir nueva tarea..." />
			<Tarea nuevaTarea={tareas} nuevaTareaOver={envtoNewTarea} />
		</div>
	)
	
	

};

