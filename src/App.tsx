import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '@mantine/core';
import { test } from 'tauri-plugin-zaid-plugin';

function App() {
  const [count, setCount] = useState(0)

  const openPage = () => {
    // console.log(test);
    
    test()
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <Button
          onClick={openPage}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Indigo cyan
        </Button>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
