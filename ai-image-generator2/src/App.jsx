import React from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Image Generator</h1>
      </header>
      <main>
        <ImageCard />
      </main>
    </div>
  );
}

export default App;
