import { useEffect, useState } from "react";

export const Tarea = (props) => {


    let arrayTareas = props.nuevaTarea;
    const [newTareas, setNewTareas] = useState([])
   



 useEffect(()=>{
    debugger
    setNewTareas(arrayTareas)
 },[arrayTareas])

 
return (
    <div className="task-list">
      {newTareas.map((tarea, index) => (
        <div key={index} className="task" onMouseLeave={()=> props.onMouseLeave()}  onMouseEnter={() => props.onMouseEnter(index)}>
          {tarea}
          <span
                className={props.valordeClase === index ? "LaX over" : "LaX"}
            onClick={() => props.nuevaTareaClick(index)}
          >
            x
          </span>
        </div>
      ))}
    </div>
)

}