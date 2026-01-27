import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@components';
import { useLocalStorage, useWindowSize } from '@hooks';
import { formatDate } from '@utils/helpers';

function App() {
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useLocalStorage('count', 0);
  const { width, height } = useWindowSize();

  const handleSave = () => {
    setSavedCount(count);
  };

  const handleLoad = () => {
    setCount(savedCount);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript Template</h1>
      <div className="card">
        <p>Count: {count}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button onClick={() => setCount(count => count + 1)}>
            Increment
          </Button>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="outline" onClick={handleSave}>
            Save to LocalStorage
          </Button>
          <Button variant="outline" onClick={handleLoad}>
            Load from LocalStorage
          </Button>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          Saved count: {savedCount}
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
          Window size: {width} × {height}
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
          Today: {formatDate(new Date())}
        </p>
      </div>
      <p className="read-the-docs">
        Edit <code>src/App.tsx</code> to start building your app
      </p>
    </>
  );
}

export default App;
