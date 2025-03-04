import { useEffect, useState } from 'react';
import styles from './App.module.scss'

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      setMessage(data.message);
    }
    fetchData();
  },);

  return (
    <div className={styles.app}>
      <p>{message || "Loading..."}</p>
    </div>
  )
}

export default App
