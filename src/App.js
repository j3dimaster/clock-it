import React from 'react'
import TimesList from './components/TimesList'
import AddEntryTimeForm from './components/AddEntryTimeForm'
import './App.css'  


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TimesList />
      <AddEntryTimeForm />
    </div>
  );
}

export default App;
