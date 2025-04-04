import React, { useState } from "react";

export const Tarea = (props) => {
	debugger
    let arrayTareas = props.nuevaTarea;
    const [classTarea, setClassTarea] = useState([]);

 

    
    // const eventDelete = (event) => {
    //     debugger
    //         event.target.className = "task putX";
    //         const index =arrayTareas.indexOf(event.target.textContent);
         
    // }       


   return(
	  <>
         <div className="task-list">
                {arrayTareas.map((tarea, index) => (
                    <div key={index} className="task" >
                       
                    {tarea}
                    
                    <span className="laX" onClick={()=> props.nuevaTareaOver(index)}>x</span>
                    </div>

                    
                    // onMouseLeave={() => console.log(`Mouse salió de la tarea: ${tarea}`)}
                ))}
            </div>
    </>
       
   )
}