import React from 'react';
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className=' my-3'>Todos List</h3>

            {
                props.todos.length === 0 ? "No todos to show" : (
                    props.todos.map((item) => {
                        return <TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />
                    })
                )
            }



        </div>

    )
}
