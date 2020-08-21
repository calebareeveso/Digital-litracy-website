import React from 'react';
import '../home/styles.css';
import Nav from '../../navigation/nav/nav'
import Footer from '../../navigation/footer/footer'
import Twitter from '../../pages/img/twitter.svg'
import Facebook from '../../pages/img/facebook.svg'

import Slack from '../../pages/img/slack.svg'

function Contact() {
  return (
    <div className="App">
      <Nav/>
      <div >
       <div className=''>
       <h1 className=" ru  pt-sm-5 pt-3 hero-h fw2 green text-center ">CONTACT</h1>
       <div className='text-center '>
       <p className="pl-4 ro small pt-sm-0  fw2 green ">Get  in touch with us in our social media <br className="d-none d-sm-block"/> Platform.
                </p>
                <div className='d-flex pl-3 justify-content-center align-items-start'>
                 <img src={Facebook} className='sicon' alt=''></img>
                 <img src={Twitter} className='sicon ' alt=''></img>
                
             </div>
       </div>
       <p className="pl-4 ro p pt-sm-0 text-center fw2 green transd"><span className='p-1' style={{backgroundColor:"#fff"}}>Or</span>
                </p>
       <hr style={{height:"2px",width:"100%",backgroundColor:"#1A9988"}}></hr>
      <div className="jumbotron " style={{backgroundColor: "#fff",marginBottom:'0'}}>
      <br></br>
        <div  className=' container'>
        <div  className=' px-md-5 mx-md-5'>

        <input className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="Name"></input>
        <br></br>
        <input className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="email" placeholder="Email"></input>
        <br></br>
        <select class="form-control" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} id="exampleFormControlSelect1">
          <option>Subject</option>
          <option>Report an issue</option>
          <option>Want to be a Partner</option>
          <option>Want to Donate</option>
          <option>Want to be a Mentor</option>
          <option>Other</option>
        </select>
        <br></br>
        <textarea placeholder='Message' class="form-control" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988'}} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        </div>
        <div className='text-center mt-5 pb-5'>
        <button href='/mentors' className='btn glinky text-center ro fw3 
        hero-p green' style={{padding:"0.3em 1em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> SEND</button>
       </div>
      </div>
      </div>
      </div>
      <div  className="jumbotron " style={{backgroundColor: "#1A9988",marginBottom:'0'}}>
            <div className='container pt-5'>
            <div className='row'>
            <div className='col-sm-7'>
            <h5  className=" ru  hero-h fw2  text-left white">Talk to a Mentor</h5>
            <p className="fw-3 p ro p pt-sm-0 pb-sm-2  white">Mentors are always available and are<br className="d-none d-sm-block"/> always ready to speak with you. </p>
            </div>
             <div className='col-sm-5  pt-4 pb-5 mb-3'>
             <button type="button" className="btn btn-outline-light btnwhite whitebtn fw2 px-4 py- ru homeheading1">JOIN
             <img src={Slack} className=" pl-2" style={{width: "2em"}}alt=''></img>
            </button>
             </div>
            </div>
            </div>
            </div>
      <Footer/>
    </div>
  );
}

export default Contact;
