import React from 'react'
import ReactDOM from 'react-dom';
import {
        Home,Profile,Courses, 
        CourseWaiver, ProgressReport,Overview, 
        ActivityPlan, Forums, Final,
        Supervisor, Forms, Login} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


function Student() {

    return (
      <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/courses' element={<Courses/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/forms' element={<Forms/>}/>
              <Route path='/course-waiver' element={<CourseWaiver/>}/>
              <Route path='/supervisor-selection' element={<Supervisor/>}/>
              <Route path='/progress-report' element={<ProgressReport/>}/>
              <Route path='/myprojectOverview' element={<Overview />}/>
              <Route path='/myprojectActivityPlan' element={<ActivityPlan />}/>
              <Route path='/myprojectForums' element={<Forums />}/>
              <Route path='/myprojectFinal' element={<Final />}/>
            </Routes>
      </Router>
    );
}
reportWebVitals();

ReactDOM.render(<Student />, document.getElementById("root"));
