import React from 'react'
import {Home,Profile,Overview,Thesis,RPS,CE} from './components';
import {Routes, Route } from 'react-router-dom';

function Supervisor() {

    return (
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/mygroupoverview' element={<Overview/>}/>
              <Route path='/thesis' element={<Thesis/>}/>
              <Route path='/rps' element={<RPS/>}/>
              <Route path='/ce' element={<CE/>}/>
            </Routes>
    );
}
export default Supervisor
