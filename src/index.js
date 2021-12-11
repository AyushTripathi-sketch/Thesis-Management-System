import React from 'react'
import ReactDOM from 'react-dom';
import {Login, Student,Supervisor} from './portals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


function App() {

    return (
      <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='st/*' element={<Student/>} />
              <Route path='sp/*' element={<Supervisor/>} />
            </Routes>
      </Router>
    );
}
reportWebVitals();

ReactDOM.render(<App />, document.getElementById("root"));
