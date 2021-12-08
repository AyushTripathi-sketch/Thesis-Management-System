import React from 'react'
import ReactDOM from 'react-dom';
import { Layout} from 'antd'
import { SideBar,Headerr,Footerr,
        Home,Profile,Courses, 
        CourseWaiver, ProgressReport,Overview, 
        ActivityPlan, Forums, Final,
        Supervisor, Forms} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


class SiderDemo extends React.Component {

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>  
          <Layout className="site-layout">
            <Headerr />
            <Routes>
              <Route path='/' element={<Home/>} />
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
            <Footerr />
          </Layout>
        </Layout>
      </Router>
    );
  }
}
reportWebVitals();

ReactDOM.render(<SiderDemo />, document.getElementById("root"));
