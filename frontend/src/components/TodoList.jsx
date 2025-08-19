import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete }) => {
    return (
        <div className="TodoList">
            <div className="todos_wrapper">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}


                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};


export default TodoList