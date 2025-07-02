import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';

function App() {
  const [formEntries,setFormEntries]=useState([]);
  const addEntry=(entry)=>{
    setFormEntries([...formEntries,entry]);

  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage addEntry={addEntry}/>}/>
        <Route path="/display" element={<DisplayPage entries={formEntries}/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
