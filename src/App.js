import React , { Component } from 'react';
import Contact from './component/pages/contact/contact'
import Home from './component/pages/home/home'
import Mentors from './component/pages/mentors/mentor'
import Courses from './component/pages/courses/cources'
import AuthCourses from './component/pages/courses/authcourse'
import Nav from './component/navigation/nav/nav'
import Course1main from './component/pages/courses/course1main'
import Course1 from './component/pages/courses/course1'
import fire from './config/fire'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        localStorage.setItem("Login", true);
        // const getgrads = localStorage.getItem("Login");
        this.setState({ user });
      } else {
        this.setState({ user: null });
        localStorage.setItem("Login", false);
      }
    });
  }
  render() {
    return (
      <Router>
      <Nav/> 
       <Switch>
     <Route path='/' exact={true} component={Home} />
     <Route path='/courses|course1main' component={Course1main}/>
     <Route path='/courses1' component={Course1}/>
     <Route path='/contact' component={Contact}/>
     {this.state.user ? <Route path='/courses' component={AuthCourses}/> : <Route path='/courses' component={Courses}/>} 
     <Route path='/mentors' component={Mentors}/>
    
     {/* <Route path='/project/cleana' component={Cleana} /> */}
     </Switch>
     </Router>)
  }
}
export default App;
