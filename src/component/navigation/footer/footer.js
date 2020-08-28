import React, { Component } from 'react'
import {
    Link
 } from "react-router-dom";

import './footer.css'
import Twitter from '../../pages/img/twitter.svg'
import Facebook from '../../pages/img/facebook.svg'
import Youtub from '../../pages/img/youtub.svg'
import Slack from '../../pages/img/slack.svg'
export default class footer extends Component {
    render() {
        return (
          <div>
                <div>
                      <div class="jumbotron text-left footerbg" style={{marginBottom:"0",backgroundColor:"#F4F4F4",color:" #5F5F5F",paddingBottom: '1em'}}>
              <div className='container-fluid'>
              <div className="row py-4">
                
                <div className="col-sm-6 col-md-5 text-center">
                <div className='px-sm-5 mx-sm-3 pb-5 pb-sm-0'>

                <p className="pl-4 pf ru green fw2" style={{transform:"translateY(20%)"}}>Join the Workspace</p> 
                <button className="btn btn-outline-light whitebtn btnwhite ru fw2 px-4 py-3" style={{background:"#1A9988",borderRadius:"4px"}}>SLACK
                <img src={Slack} onClick={() => this.navopen()} className=" pl-2 d-none d-md-inline" style={{width:"1.6em"}} alt=''></img>
                </button>
                <small className='text-dark d-block pt-3'>SignUp to the digital classroom and get free access to courses if you are a student. 
Follow us on iur social media page to keep up with our activities and connect with us.</small>
                <div className='d-flex pt-2 justify-content-center'>
                 <img src={Facebook} className='sicon' alt=''></img>
                 <img src={Twitter} className='sicon ' alt=''></img>
                 <img src={Youtub} className='sicon ' alt=''></img>
                 </div>

                </div>

                </div>
                <div className="col-sm-6 col-md-3 ">
                <p className=" pf ro  green f-l" style={{transform:"translateY(5%)"}}>Recent Courses </p> 
                                 <ul className='f-ul '>
                                     <li> <Link to='/' className='f-link'>Intoduction to Photoshop</Link></li>
                                     <li><Link to='/'  className='f-link'>Logo design</Link></li>
                                     <li><Link to='/'  className='f-link'>Google slides</Link></li>
                                 </ul>
                                 
                 </div>

                 <div className="col-sm-6 col-md-3 ">
                <p className=" pf f-l ro  green" style={{transform:"translateY(5%)"}}><span>Top Courses</span></p> 
                                 <ul className='f-ul '>
                                     <li> <Link to='/'  className='f-link'>UI design</Link></li>
                                     <li><Link to='/' className='f-link'>Flyer design</Link></li>
                                 </ul>
                                 
                 </div>
    
    
           </div>
  
              </div>
             
          </div>
             </div>
              <div className='container-fluid pl-5' style={{background:"#DDDDDD"}}>
              <div className='d-block  d-sm-flex justify-content-between m-0 p-2' >
            

           <p className="text-sm-right text-center p ro p pt-4 green">  <small> Privacy Policy | Terms of use</small></p>
           <p className="text-sm-right text-center p ro p pt-4">  <small> 2020 © Copyrights All rights reserved | Made by caleb areeveso</small></p>
               
            </div> 
              </div>
          </div>
        )
    }
    
}

