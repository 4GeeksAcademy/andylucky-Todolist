import React, { useEffect, useState } from "react";
import { Tarea } from "./Tarea";

//Componente ListaTareas
export const ListaTareas = (props) => {

	const [tareas, setTareas] = useState([]);
    const [inputValue, setInputValue] =useState("");

	

	//funcion que añade nueva tarea
	const handleKeyDown = (event) => {
		if(event.key==="Enter"){
		 setTareas([...tareas, inputValue])
		}
	}

	//funcion para eliminar la tarea donde se hace click en la x
	const envtoNewTarea = (indiceTarea) => {
		const nuevasTareas = [...tareas]
		nuevasTareas.splice(indiceTarea,1)
	    setTareas(nuevasTareas);
	}


	//funcion que se actualiza cuando cambia  tareas
	useEffect(() => {
		console.log("useEffect ejecutado. Tareas actuales:", tareas);
		setInputValue("")
	}, [tareas]); 


	return (
		<div className="container d-flex cutomList">
			<input type="text" onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} value={inputValue}   placeholder="Añadir nueva tarea..." />
			<Tarea nuevaTarea={tareas} nuevaTareaOver={envtoNewTarea} />
		</div>
	)
	
	

};

