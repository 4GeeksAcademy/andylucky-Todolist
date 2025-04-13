import React, { useEffect, useState } from "react";
import { Tarea } from "./Tarea";

//Componente ListaTareas
export const ListaTareas = (props) => {

	const [tareas, setTareas] = useState([]);
    const [inputValue, setInputValue] =useState("");
	

	const [valorClass, setValorClass] = useState("LaX"); 



	//funcion que añade nueva tarea
	const handleKeyDown = (event) => {
		if(event.key==="Enter"){
		 setTareas([...tareas, inputValue])
		
		}
	}

	const handerlOver = (index) => {
		setValorClass(index); // guarda el índice de la tarea con el mouse encima
	  };

	const handerlOut = () =>{
		setValorClass(null)
	}



	//funcion para eliminar la tarea donde se hace click en la x
	const envtoNewTarea = (indiceTarea) => {
		const tareasActualizadas  = [...tareas];
		tareasActualizadas.splice(indiceTarea, 1)
		setTareas(tareasActualizadas)

	}

	

	//funcion que se actualiza cuando cambia  tareas
	useEffect(() => {
		console.log("useEffect ejecutado. Tareas actuales:", tareas);
		setInputValue("")
	

	}, [tareas]); 

	return (
		<div className="container d-flex cutomList">
			<input type="text" onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} value={inputValue}   placeholder="Añadir nueva tarea..." />
			<Tarea valordeClase={valorClass}  onMouseLeave={handerlOut} onMouseEnter={handerlOver} nuevaTarea={tareas} nuevaTareaClick={envtoNewTarea} />
			{tareas.length>0 &&  <div className="restoTareas">falta {tareas.length} tareas</div> }
			{tareas.length===0 && <div className="restoTareas"> "No hay tareas, añadir tareas"</div>}
		</div>
	)
	
	

};

