import React,{useState} from 'react';
import './App.css';
import Posts from "./components/Posts";

function App() {
    const [open,setOpen] = useState(false);

  return (
      <div className="App">
        <Posts />
      </div>
  );
}

export default App;
