//import React from "react";
import React, { useState } from 'react';
//include images into your bundle


//create your first component
export function App () {
	const [list, setList]= useState([]);
	const [input, setInput]= useState("");
    const [count, setCount] = useState(0);
    
    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        //agregar todo a la lista 
        setList([...list, newTodo])

        //clear input box
        setInput("")
    };

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }

	return (
		<div className="text-center">
			<h1 className="Todo">todos</h1>
			<div className="file-input">
			<input
				type="text"
            	className="text"
            	value={input}
            	onChange={e => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        addTodo(input, setCount(count + 1))
                        
                    }        
                }}
			/>
			
            <ul className="list-group-item">
                {list.map((todo) => (
                    <li className="separar list-group-item" key={todo.id}>
                        <span>{todo.todo}</span>
                        <button className='boton btn btn-light me-0' onClick={() => deleteTodo(todo.id, setCount(count - 1))}>&times;</button>
                    </li>
                ))}
                <span className="contador">{count +" item left"}</span>
            </ul>  
			</div>
		</div>

	);
};
export default App;