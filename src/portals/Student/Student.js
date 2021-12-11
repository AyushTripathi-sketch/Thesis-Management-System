import React from 'react'
import {
        Home,Profile,Courses, 
        CourseWaiver, ProgressReport,Overview, 
        ActivityPlan, Forums, Final,
        Supervisor, Forms,Submission, Confirmation} from './components';
import { Routes, Route } from 'react-router-dom';


function Student() {

    return (
            <Routes>
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
              <Route path='/thesis-submission' element={<Submission />}/>
              <Route path='/thesis-sub-confirmation' element={<Confirmation />}/>
            </Routes>
    );
}
export default Student;
