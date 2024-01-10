import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");
    const [isInvalid, setIsInvalid] = useState(true)
    const handleChange = e => {
        setTask(e.target.value)
        if (task === '') {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    };
    const input = e => {
        e.preventDefault();
        if (!isInvalid) {
            createTodo({task, id: uuid() });
            setTask("");
        }
    };

    return (
        <div>
            <form onSubmit={input}>
                <label htmlFor="task">Task:</label>
                <input 
                    id="task"
                    name="task"
                    type="task"
                    onChange={handleChange}
                    value={task}
                />
                {isInvalid && <span style={{color: 'red'}}>Task cannot be blank!</span>}
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;