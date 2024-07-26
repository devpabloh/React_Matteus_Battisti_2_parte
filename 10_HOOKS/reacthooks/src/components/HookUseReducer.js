import { useReducer, useState } from "react"

const HookUseReducer = () => {

    // 1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action)=>{
        return Math.random(state);
    })

    const initialTaks =[
        {id: 1, text: "Estudar"},
        {id: 2, text: "Ir para academia"}
    ]

    const taskReducer = (state, action) =>{
        switch (action.type) {
            case "ADD":
                const newTaks = {
                    id: Math.random(),
                    text: taskText,
                }
                
                SetTaskText("")

                return [...state, newTaks]
            case "DELETE":
                return state.filter((task)=>  task.id !== action.id);
        
            default:
                return state;
                
        }
    };

    const [taskText, SetTaskText] = useState("");
    const [ tasks, dispathTasks] = useReducer(taskReducer, initialTaks);
    

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispathTasks({type:"ADD"});
    }; 

    const removeTask = (id) => {
        dispathTasks({type: "DELETE", id})
    };

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número! </button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> SetTaskText(e.target.value)} value={taskText} />
        </form>
        <input type="submit" value="Enviar" />
        {tasks.map((task)=>(
            <li key={task.id} onDoubleClick={()=>removeTask(task.id)}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer