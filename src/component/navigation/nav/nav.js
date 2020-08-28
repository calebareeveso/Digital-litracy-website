import React from 'react'
import {
     Link
  } from "react-router-dom";
  import fire from '../../../config/fire'
  import { Navbar,Nav ,Dropdown} from 'react-bootstrap'
  import './nav.css'
  import Search from "../../pages/img/search.svg";
import Logo from '../../pages/img/logo.png'
//login
import Login from '../../pages/login/Login'

class BootstrapNavbar extends React.Component{
    componentDidMount(){
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

    }

    navopen(){
        document.getElementById('id01').style.display='block'
      }
      navclose(){
         document.getElementById('id01').style.display='none'
       }
       myFunctionNav() {
         const x = document.querySelector(".containerNav")
         x.classList.toggle("change");
         console.log('hi')
       }
      



    switchSignup(){

        document.getElementById('id01').style.display='block';

        const signup = document.querySelectorAll(".signup")
      var i;
      for (i = 0; i < signup.length; i++) {
          signup[i].classList.toggle('dblock')
        }
        const login = document.querySelectorAll(".login")
      for (i = 0; i < login.length; i++) {
          login[i].classList.toggle('dnone')
        }

    }

    switchLogin(){
      const signup = document.querySelectorAll(".signup")
    var i;
    for (i = 0; i < signup.length; i++) {
        signup[i].classList.remove('dblock')
      }
      const login = document.querySelectorAll(".login")
    for (i = 0; i < login.length; i++) {
        login[i].classList.remove('dnone')
      }

      document.getElementById('id01').style.display='block';
   
  }
  logout() {
    fire.auth().signOut();
}

    
    render(){
        return(
            <div className='xHidden'>
                <div className="row">
                    <div className="col-md-12">
                        

                            <Navbar  expand="lg" sticky="top" className='navwidth' style={{backgrounColor: "#ffffff"}}>
                            <Link to='/' >
                                <Navbar.Brand  className='noOutline'><img src={Logo} alt='' className="nlogo"></img></Navbar.Brand>
                            </Link>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='noOuline'>  
                                <div className="containerNav"  onClick={() => this.myFunctionNav()}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                                </div>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="nav-plus-con-m ml-auto"> 
                                    <Nav.Link className=" d-none d-lg-block"><span> <Link to='/courses' className='green ro link2 '>COURSES</Link></span></Nav.Link>
                                     <div className='nav-plus-con d-none d-lg-block'>
                                         <div  className='nav-plus'></div>
                                         <div className='nav-minus'></div>
                                     </div>
                                     <br></br>
                                    
                                </Nav>
                                    <Nav className="pl-lg-4" >
                                   
                                    <Nav.Link className=" d-block d-lg-none"><span> <Link to='/courses' className='green ro link '>COURSES</Link></span></Nav.Link>
                                    
                                    <Nav.Link ><span ><Link to='/mentors' className='green ro link'>MENTORS</Link></span></Nav.Link>
                                    <Nav.Link  ><span > <Link to='/contact' className='green ro link'>CONTACT</Link></span></Nav.Link>
                                    <Nav.Link  className='pr-2 d-none d-lg-block'><img src={Search} alt=''></img></Nav.Link>
                                    
                                    {/* <Nav.Link href="#" ><span  onClick={() => this.navopen()}></span></Nav.Link> */}

                                   
 
                                   

                               
                                   
                                   <Dropdown>
                                   <Dropdown.Toggle  className="ro greendropdown text-white" id="dropdown-basic">
                                   JOIN THE CLASSROOM
                                   </Dropdown.Toggle>

                                   <Dropdown.Menu>
                                       <Dropdown.Item   className=" greendropdown-h green" onClick={this.switchSignup}>REGISTER</Dropdown.Item>
                                       <Dropdown.Item  className=" greendropdown-h green" onClick={this.switchLogin} >LOGIN</Dropdown.Item>
                                       <Dropdown.Item   className=" greendropdown-h green" onClick={this.logout}>Logout</Dropdown.Item>
                                       
                                   </Dropdown.Menu>
                                 
                                   {/* <Dropdown.Item as="button">Another action</Dropdown.Item>
                                   <Dropdown.Item as="button">Something else</Dropdown.Item> */}
                                  </Dropdown>



                                    </Nav>
                                  
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            
                           
                    </div>
                </div>
              


                <div id="id01" class="modal">
  
                <form class="modal-content animate jumbotron" >
                    <span onClick={() => this.navclose()} class="close" title="Close Modal">&times;</span>

                    <Login/>
                 
                   
                  </form>
                  
                </div>




            </div>
        )  
    }
}

export default BootstrapNavbar;