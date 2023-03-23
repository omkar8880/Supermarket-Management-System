import "./App.css";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from './Components/Main.js'

function App() {
  return (
    <>
      <BrowserRouter>

        <Main />

      </BrowserRouter>
    </>
  );
}

export default App;