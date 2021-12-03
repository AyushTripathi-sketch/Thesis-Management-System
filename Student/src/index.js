import React from 'react'
import ReactDOM from 'react-dom';
import { Home } from './components';

class SiderDemo extends React.Component {

  render() {
    return (
      <Home/>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById("root"));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// import {
//   //Brand,
//   Navigation,
//   Header,
//   Footer,
//   // Profile,
//   // Thesis,
//   // Courses,
//   // Progress_Report
// } from "./components";

// ReactDOM.render(
//   <Router>
//     {/* <Brand/> */}
//     <Navigation />
//     <Header />
//     {/* <Routes>
//       <Route path="/" element={<Profile />} />
//       <Route path="/thesis" element={<Thesis />} />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/progressReport" element={<Progress_Report />} />
//     </Routes>*/}
//     <Footer />
//   </Router>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
