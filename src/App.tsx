import React, { useEffect, useState } from 'react';
import TestList from './components/TestList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <TestList />
    </div>
  );
};

export default App;
