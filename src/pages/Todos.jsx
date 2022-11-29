import React from 'react'
import Spinner from '../components/Spinner';
import { useGetTodosQuery } from '../store/apis/todosApi';

const Todos = () => {

     const {data: todos = [], isLoading, completed} = useGetTodosQuery()
    

     return (
          <>
               <h1>Todos RTK Query</h1>
               <hr />
               <h3>{isLoading ? <Spinner /> : ""}</h3>
               <ul>
                    {todos.map((todo, index) => (
                         <li key={index}>
                              {todo.title} 
                              <strong>{completed ? "Completado" : "Pendiente"}</strong>
                         </li>
                         
                    ))}
               </ul>

               buto
          </>

     )
}

export default Todos