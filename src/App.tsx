import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <img src={logo} className="w-32 h-32 mx-auto mb-8 animate-spin" alt="logo" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to React + TypeScript + Tailwind CSS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
