import React from 'react'

export const Todo = ({tasks,deleteTask}) => {
  return (
    <ul className="todo-list">
        {
            tasks.map((item,index)=>(
                <li key={index} className="todo-item">
                    {item}
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </li>

            ))
        }
    </ul>
  )
}
