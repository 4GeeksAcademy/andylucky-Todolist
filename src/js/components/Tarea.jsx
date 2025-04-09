
export const Tarea = (props) => {
    let arrayTareas = props.nuevaTarea;
   return(
	  <>
         <div className="task-list">
                {arrayTareas.map((tarea, index) => (
                    <div key={index} className="task" >   
                    {tarea}             
                    <span className="laX" onClick={()=> props.nuevaTareaOver(index)}>x</span>
                    </div>
                ))}
            </div>
    </>
       
   )
}