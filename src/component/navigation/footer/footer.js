import React, { Component } from 'react'
import './footer.css'
import Logo from '../../pages/img/flogo.png'
import Twitter from '../../pages/img/twitter.svg'
import Facebook from '../../pages/img/facebook.svg'
export default class footer extends Component {
    render() {
        return (
          <div>
                <div>
                      <div class="jumbotron text-left" style={{marginBottom:"0",backgroundColor:"#F4F4F4",color:" #5F5F5F",paddingBottom: '1em'}}>
               <div className="row py-4">
                <div className="d-md-block d-none  text-center col-md-4">
                <img src={Logo} alt='' className='flogo' style={{width:"15em"}}></img>
                     
 
                </div>
                <div className="col-sm-6 col-md-4">
                <p className="pl-4 pf ro" style={{transform:"translateY(45%)"}}> CONTACT US </p> 
                <p className="pl-4 p ro pf2 "> 
                    Address <br/>
                    info@digitalClassroom.com<br/>
                    Phone<br/>
                </p> 
                <div className='d-sm-flex pl-3 d-none '>
                 <img src={Facebook} className='sicon' alt=''></img>
                 <img src={Twitter} className='sicon ' alt=''></img>
                
             </div>
                </div>
                <div className="col-sm-6 col-md-4">
                        <p className="pl-4 pf ro" style={{transform:"translateY(45%)"}}> QUICK LINK </p> 
                        <a className="pl-4 ro pf2 " href='/courses'>Courses</a>  
                        <a className="pl-4 ro pf2 " href='/mentors'>Mentors</a>
                        <a className="pl-4 ro pf2 " href='/'> About Digital Classroom</a>
                 </div>
    
           </div>
  
                 <p className="text-center p ro p pt-4">  <small> 2020 © Copyrights All rights reserved | Made by caleb areeveso</small></p>
    
          </div>
             </div>
          </div>
        )
    }
}

