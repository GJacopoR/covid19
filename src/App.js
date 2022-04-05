import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Views/Home/Home';
import Test from './Components/Views/Test/Test';
import { Navbar } from './Components/UI/Navbar/Navbar';


function App() {
  
  const [data, setData] = useState(null)

  useEffect(() => {fetch(`https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json`)
  .then(response => response.json())
  .then(data => setData(data))
  },[])

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/region/:region">
          </Route>
          <Route path="/test" element={<Test />}>
          </Route>
          <Route path="/" element={data && <Home data={data}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
