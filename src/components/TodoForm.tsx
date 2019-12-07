import React, { useState } from 'react';

interface TodoFormProps {
  addTodo(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('');
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (title !== '') {
        props.addTodo(title);
        setTitle('');
      }
    }
  };
  return (
    <>
      <div className="input-field">
        <input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          onKeyPress={keyPressHandler}
          type="text"
          name="title"
          id="title"
          placeholder="Введите название дела"
        />
      </div>
    </>
  );
};
export default TodoForm;
