import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './components/pages/Courses';
import Profile from './components/pages/Profile';
import Progress_Report from './components/pages/Progress_Report';
import New_Thesis from './components/pages/New_Thesis';
import Pending_Thesis from './components/pages/Pending_Thesis';
import Completed_Thesis from './components/pages/Completed_Thesis';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/courses' component={Courses} />
        <Route path='/profile' component={Profile} />
        <Route path='/contact-us' component={Progress_Report} />
        <Route path='/new-thesis' component={New_Thesis} />
        <Route path='/pending-thesis' component={Pending_Thesis} />
        <Route path='/completed-thesis' component={Completed_Thesis} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
