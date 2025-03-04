import { useEffect, useState } from 'react';
import styles from './Todo.module.scss';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const API_URL = '/api/todos';

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, done: false }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setText('');
  };

  const toggleTodo = async (id: number, done: boolean) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !done }),
    });
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !done } : todo)));
  };

  const deleteTodo = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.todoContainer}>
      <h1>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className={styles.todoList}>
        {todos.map(({ id, text, done }) => (
          <li key={id} className={done ? styles.done : ''}>
            <span onClick={() => toggleTodo(id, done)}>{text}</span>
            <button onClick={() => deleteTodo(id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
