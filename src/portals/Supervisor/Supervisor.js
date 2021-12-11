import React from 'react'
import {Home} from './components';
import {Routes, Route } from 'react-router-dom';

function Supervisor() {

    return (
            <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes>
    );
}
export default Supervisor
