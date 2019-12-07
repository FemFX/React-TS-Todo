import React from 'react';
import { iTodo } from '../interfaces';

// type TodoListProps = {
//     todos : iTodo[]

// }
interface TodoListProps {
  todos: iTodo[]
  toggleHandler(id : number):any
  removeTodo(id :number):void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleHandler, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
          const classes = ['todo']
          if (todo.completed){
              classes.push('completed')
          }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input 
                type="checkbox"
                checked={todo.completed} 
                onChange={toggleHandler.bind(null, todo.id)}  
            />
              <span>{todo.title}</span>
              <div className="red-text" onClick={() => removeTodo(todo.id)}>Delete</div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
