import React from 'react'
import ReactDOM from 'react-dom';
import { Layout} from 'antd'
import { SideBar,Headerr,Footerr,Home,Profile,Courses, CourseWaiver} from './components';
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
              <Route path='/course-waiver' element={<CourseWaiver/>}/>
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