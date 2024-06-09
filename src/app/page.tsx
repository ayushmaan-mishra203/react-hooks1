// src/App.tsx
import React from 'react';
import Todo from './components/Todo';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Todo />
    </div>
  );
};

export default App;

