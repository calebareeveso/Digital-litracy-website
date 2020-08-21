import React from 'react'
import {
     Link
  } from "react-router-dom";
  import { Navbar,Nav } from 'react-bootstrap'
  import './nav.css'
import Logo from '../../pages/img/logo.png'
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
     
    render(){
        const GreenButton = {padding:"0.5em 0.8em",backgroundColor: "#1A9988",borderRadius: "12px",textAlign:"center",color:'#fff'}
        return(
            <div className='xHidden'>
                <div className="row">
                    <div className="col-md-12">
                        

                            <Navbar  expand="md" sticky="top" className='navwidth' style={{backgrounColor: "#ffffff"}}>
                                <Navbar.Brand href="/" className='noOutline'><img src={Logo} alt='' className="nlogo"></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" >  
                                <div className="containerNav"  onClick={() => this.myFunctionNav()}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                                </div>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                   
                                    <Nav.Link  ><span > <Link to='/' className='green ro link'>Home</Link></span></Nav.Link>
                                    <Nav.Link ><span> <Link to='/courses' className='green ro link'>Courses</Link></span></Nav.Link>
                                    <Nav.Link ><span ><Link to='/mentors' className='green ro link'>Mentors</Link></span></Nav.Link>
                                    <Nav.Link ><span ><Link to='/contact' className='green ro link'>Contact Us</Link></span></Nav.Link>
                                    <Nav.Link href="#" style={GreenButton}><span className="ro" onClick={() => this.navopen()}>JOIN THE CLASSROOM</span></Nav.Link>

                                   
                                    </Nav>
                                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            
                           
                    </div>
                </div>
              


                <div id="id01" class="modal">
  
                <form class="modal-content animate jumbotron" action="/action_page.php" method="post">
                    <span onClick={() => this.navclose()} class="close" title="Close Modal">&times;</span>

                   <div className='container'>
                       
                   <div className='px-md-5 mx-md-5'>
                   <h1 className=" ro pl-sm-5  pb-5 hero-h fw1 green text-center">Register </h1>
                   <p className="pl-4 ro small pt-sm-0  fw2 green ">
                </p>
                    <input className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="Name"></input>
                    <br></br>
                    <input className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="School"></input>
                    <br></br>
                    <input className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="email" placeholder="Email"></input>
                    <br></br>
                    <div class="d-flex justify-content-between pb-4" role="group" aria-label="Basic example">

                    <button href='/mentors' className='btn glinky text-center ro fw3 
                      hero-p green' style={{padding:"0.3em 1em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> SEND</button>
                    <button type="button" style={{padding:"0.3em 1em",border:'4px solid #cf2121'}} onClick={() => this.navclose()} className="hero-p cancelbtn rounded-0 btn btn-outline-danger">Cancel</button>
                     
                    </div>
                    

                   </div>
                   </div>
                 
                   
                  </form>
                  
                </div>




            </div>
        )  
    }
}

export default BootstrapNavbar;