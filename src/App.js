import React from 'react';
import Contact from './component/pages/contact/contact'
import Home from './component/pages/home/home'
import Mentors from './component/pages/mentors/mentor'
import Courses from './component/pages/courses/cources'
import Nav from './component/navigation/nav/nav'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

function App() {
  return (

    <Router>
     <Nav/> 

      <Switch>
    <Route path='/' exact={true} component={Home} />
    <Route path='/contact' component={Contact}/>
    <Route path='/mentors' component={Mentors}/>
    <Route path='/courses' component={Courses}/>
    {/* <Route path='/project/cleana' component={Cleana} /> */}

    </Switch>
    </Router>

  );
}

export default App;
