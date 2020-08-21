import React , { Component } from 'react';
import Footer from '../../navigation/footer/footer'
import Hero from '../../pages/img/hero.png'
import Mentor from '../../pages/img/mentor.png'
import Student from '../../pages/img/student.png'
import Book from '../../pages/img/book.png'
import Unlimited from '../../pages/img/unlimited.png'
import Collaboration from '../../pages/img/collaboration.png'
import DedicatedMentor from '../../pages/img/dedicatedMentor.png'
import s1 from '../../pages/img/s1.png'
import s2 from '../../pages/img/s2.png'
import Twitter2 from '../../pages/img/twitter2.svg'
import Slack from '../../pages/img/slack.svg'
import Linkedin from '../../pages/img/linkedin.svg'
import BgPartner from '../../pages/img/bgpartner.png'
import Heart from "../../pages/img/heart.svg";
import Star from "../../pages/img/star.svg";

// mentors 
import M1 from '../../pages/img/m2.png'
import M2 from '../../pages/img/m5.png'
import M3 from '../../pages/img/m4.png'

// courses 
import C1 from '../../pages/img/c1.png'
import C2 from '../../pages/img/c2.png'
import C3 from '../../pages/img/c3.png'
import './styles.css';
class Home extends Component {
   
  
 
 

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
 
    
    
  render() {

    
  return (
    <div>
   
     <main>


      
          
          <div className="jumbotron" style={{backgroundColor: "#ffffff",padding:'3em 0em'}}>
        <div className=" hero">
            <div className='row'>
                <div className='col-sm-10 col-md-10 col-lg-6  hero-text'>
                  <h1 className=" ro pl-sm-4 pt-sm-4 hero-h green">DIgital ClassRoom </h1>
                  <p className="pl-sm-4 p ro hero-p py-sm-3 fw2">The Digital Classroom aims to  rewrite the narrative by teaching students basic digital skills and  also connecting them with  mentors to ensure they thrive,make good career choices and live a purposeful life.
                  </p>
                  <a href="/" style={{padding:"0.7em 0.8em",backgroundColor:" #1A9988",borderRadius: "12px"}} class="ro ml-sm-4 white">GET STARTED</a>
                </div>
                <img className='col-md-2 col-lg-6   d-none d-lg-block' alt='' style={{height: "70vh"}} src={Hero}></img>
             </div>
           </div>
      </div>

      <div className="jumbotron text-center" style={{backgroundColor: "#ffffff",padding:"0em"}} >
      <div className="container-fluid">
      <div className="row">
         <div className="py-5 col-sm-6 col-md-4">
             <img src={Book} alt="" ></img>
             <h1 className=" ru  pt-4 fw2 heading2 green text-center">COURSES</h1>
             <h1 className=" ru pt-2 fw2 heading2 black text-center">8+</h1>
        </div>
        <div className="py-5 col-sm-6 col-md-4">
            <img src={Student} alt="" ></img>
            <h1 className=" ru  pt-4 fw2  heading2 green text-center">IMPACTED STUDENTS</h1>
            <h1 className=" ru pt-2 fw2  heading2 black text-center">100+</h1>
        </div>
         <div className="py-5 col-sm-6 col-md-4">
            <img src={Mentor} alt="" ></img>
            <h1 className=" ru  pt-4 fw2 heading2 green text-center">MENTORS</h1>
            <h1 className=" ru  pt-2 fw2 heading2 black text-center">10+</h1>
        </div>
       </div>
      </div>
      </div>



      {/* why learn with us   */}
        
       <div className="jumbotron " style={{backgroundColor: "#F4F4F4",marginBottom:'0'}}>
        <h1 className=" ro pl-sm-5 pt-sm-5 pb-3 homeheading2 fw1 green text-center">Why Learn with DIgital ClassRoom </h1>
        <div className="row pt-5">
            <div className="col-md-4 col-sm-6 cardHover">
               <div className="pt-5">
                 <img src={Unlimited} className='pl-4'alt=""></img>
                <h1 className="pl-4 pt-4 ro   homeheading3 green text-left">Unlimited Courses</h1>
                <p className="pl-4 ro p pt-sm-0 pb-sm-2  pb">We give student access to free and paid cources. Related to the development of their digital skills.
                </p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6 cardHover">
               <div className="pt-5">
                 <img src={Collaboration} className='pl-4' alt=""></img>
                <h1 className=" ro pl-4 pt-3  homeheading3 green text-left">Collaboration</h1>
                <p className="pl-4 p ro p pt-sm-0 pb-sm-2 pb">We don’t just give resouces and teach student but also show you the importances of collaborating with people.
                </p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6 cardHover">
                <div className="pt-5">
                  <img src={DedicatedMentor} className='pl-4' alt=""></img>
                <h1 className=" ro pl-4 pt-4 homeheading3 green text-left">Dedicated Mentors</h1>
                <p className="pl-4 p ro p pt-sm-0 pb-sm-2 ">We have mentors here who are will to take their time to teach  share their knowlege, guide and imporve your skills.
                </p>
            </div>
           </div>
        </div>
       
      </div>
     <div>
     <div classNme="row">
       <div className='col-sm-6'>
      
       </div>
       <div className="col-sm-6">
    
       </div>
        </div>
     </div>


     <div className="row no-gutters sm-no">
      <div class="col-lg-6">
      <div class="card  cards text-white">
          <img class="card-img " src={s1} alt="images"></img>
          <div class="card-img-overlay">
            <h5  className=" ru pt-sm-5 homeheading3 fw2  text-left card-title">BECOME FAMILIAR WITH TECHNOLOGY</h5>
            <p className=" card-text p ro fw3 p pt-sm-0 pb-sm-2 ">We offer the best courses to help you become proficient with everyday technologies
            </p>
            <button type="button" className="btn btn-outline-light whitebtn">VIEW COURSES</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
      <div class="card cards  text-white">
          <img class="card-img " src={s2} alt="images"></img>
          <div class="card-img-overlay">
            <h5  className=" ru pt-sm-5 homeheading3 fw2  text-left card-title">GET TO MAKE YOUR FIRST <br/>DESIGN</h5>
            <p className=" card-text p ro fw3 p pt-sm-0 pb-sm-2 ">We give you the some of the best courses in design that will help build your design carrer. 
            </p>
            <button type="button" className="btn btn-outline-light whitebtn">VIEW COURSES</button>
          </div>
        </div>
      </div>
      
    </div>

     {/* courses */}


    <div  className="jumbotron " style={{backgroundColor: "#fff"}}>
     <h1 className=" ro pl-sm-5 pt-sm-5 pb-5 homeheading2 fw1 green text-center">Explore featured courses</h1>
       <div className='container pt-3'>
       <div className='row'>
       {/* col 1 */}
       <div className='col-md-6 col-lg-4'>
      <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
      <img class="card-img-top" src={C1} alt="img"></img>
      <div class="card-body">
      <h1 className="card-title ro   homeheading3  text-left">Flyer design</h1>
      
      <div className='d-flex py-2'>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <p className=" ro card-text pr-1 fw3 p">4.0 (1 reviews)</p>
      </div>
      <p className=" ro card-text fw3 small">This course help you imporve your Logo design skills, with this course you get to know all you need in creating a good Logo
                </p>
      <a href='/courses' className='btn glinky text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.3em 0.9em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> ENROLL</a>

      </div>
    </div>
      </div>

      {/* col 2 */}
      <div className='col-md-6 col-lg-4 '>
      <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
      <img class="card-img-top" src={C2} style={{width: "100%",height:"10em"}}alt="imgs."></img>
      <div class="card-body">
      <h1 className="card-title ro   homeheading3  text-left">Introduction to 
Photoshop</h1>
      
      <div className='d-flex py-1'>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <p className=" ro card-text pr-1 fw3 p">4.5 (5 reviews)</p>
      </div>
      <p className=" ro card-text fw3 small">Become familar with photoshop.</p>
      <a href='/courses' className='btn glinky text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.3em 0.9em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> ENROLL</a>

      </div>
    </div>
      </div>

      {/* col 3 */}
      <div className='col-md-6 col-lg-4'>
      <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
      <img class="card-img-top" src={C3} style={{width: "100%",height:"10em"}}alt="images"></img>
      <div class="card-body">
      <h1 className="card-title ro   homeheading3  text-left">Introduction to 
Goggle Slides</h1>
      
      <div className='d-flex py-1'>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <img src={Star} alt=''></img>
      <p className=" ro card-text pr-1 fw3 p">4.2 (5 reviews)</p>
      </div>
      <p className=" ro card-text fw3 small">Create you very first slide.</p>
      <a href='/courses' className='btn glinky text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.3em 0.9em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> ENROLL</a>

      </div>
    </div>
      </div>
      
       </div>
       <div className='text-center mt-5 pb-5'>
   <a href='/courses' className='btn glinky text-center ro fw3 p green' style={{padding:"0.4em 0.8em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> Get All Courses</a>

   </div>
       </div>
     </div>

    
    {/* join slack */}
    <div  className="jumbotron " style={{backgroundColor: "#1A9988",marginBottom:'0'}}>
    <div className='container pt-5'>
            <div className='row'>
            <div className='col-sm-1'></div>
            <div className='col-sm-6'>
            <h5  className=" ru  homeheading2 fw2  text-left white">Join Our Slack Workspace</h5>
            <p className="fw-3 p ro p pt-sm-0 pb-sm-2  white">Introduce Your self in the introduction channel get to know your Mentors and <sstrong>
              Let's help you start you Journey.</sstrong>.</p>
            </div>
             <div className='col-sm-5  pt-4 pb-5 mb-3'>
             <button onClick={() => this.navopen()} type="button" className="btn btn-outline-light btnwhite whitebtn fw2 px-4 py- ru homeheading1">JOIN
             <img src={Slack} className=" pl-2" style={{width: "2em"}}alt=''></img>
            </button>
             </div>
            </div>
            </div>
    </div>
    




     <div  className="jumbotron " style={{backgroundColor: "#fff",marginBottom:'0'}}>
     <h1 className=" ro pl-sm-5  pb-3 homeheading2 fw1 green text-center">Dedicated Mentors</h1>
       

{/* card 1 */}
    <div className='container' >

    <div className='row'>
 <div className='col-sm-6 col-md-6 col-lg-4'>
<div 
    className="card my-5 small-4"
    style={{maxWidth: "100%",borderRadius: "15px",height: "20rem",
    }}
  >
    <div className="row no-gutters position-relative" style={{height: "100%"}}>
      <div className="col-10 col-sm-10 ">
        <img
          src={M1}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            height: "20rem",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
          class="card-img small-4"
          alt="..."
        />
      </div>
      <div class="col-2 col-sm-2  card-body d-flex flex-column justify-content-center align-items-center" style={{background: "#1A9988",
borderRadius: "0px 20px 20px 0px"}}> 
        <img src={Twitter2} className='sicon m-1' alt=''></img>
           <img src={Slack} className='sicon m-1' alt=''></img>
           <img src={Linkedin} className='sicon m-1' alt=''></img>

      </div>
    </div>
  <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Success Areeveso</p>

  </div>

</div>





<div className='col-sm-6 col-md-6 col-lg-4'>
<div 
    className="card my-5 small-4"
    style={{maxWidth: "100%",borderRadius: "15px",height: "20rem",
    }}
  >
    <div className="row no-gutters position-relative" style={{height: "100%"}}>
      <div className="col-10 col-sm-10 ">
        <img
          src={M2}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            height: "20rem",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
          class="card-img small-4"
          alt="..."
        />
      </div>
      <div class="col-2 col-sm-2  card-body d-flex flex-column justify-content-center align-items-center" style={{background: "#1A9988",
borderRadius: "0px 20px 20px 0px"}}> 
        <img src={Twitter2} className='sicon m-1' alt=''></img>
           <img src={Slack} className='sicon m-1' alt=''></img>
           <img src={Linkedin} className='sicon m-1' alt=''></img>

      </div>
    </div>
  <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Erioluwa Adeyinka</p>

  </div>

</div>



<div className='col-sm-6 col-md-6 col-lg-4'>
<div 
    className="card my-5 small-4"
    style={{maxWidth: "100%",borderRadius: "15px",height: "20rem",
    }}
  >
    <div className="row no-gutters position-relative" style={{height: "100%"}}>
      <div className="col-10 col-sm-10 ">
        <img
          src={M3}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            height: "20rem",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
          class="card-img small-4"
          alt="..."
        />
      </div>
      <div class="col-2 col-sm-2  card-body d-flex flex-column justify-content-center align-items-center" style={{background: "#1A9988",
borderRadius: "0px 20px 20px 0px"}}> 
        <img src={Twitter2} className='sicon m-1' alt=''></img>
           <img src={Slack} className='sicon m-1' alt=''></img>
           <img src={Linkedin} className='sicon m-1' alt=''></img>
      </div>
    </div>
  <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Adoara Ikegwuonu</p>

  </div>

</div>
 </div>
   <div className='text-center mt-5 pb-5'>
   <a href='/mentors' className='btn glinky text-center ro fw3 p green' style={{padding:"0.4em 0.8em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> See All Mentors</a>

   </div>
    </div>
</div>







    <div class="card carddy text-white position-relative" >
          <img class="card-img " src={BgPartner} alt="images" style={{height:'60vh'}}></img>
          <div class="card-img-overlay" >
            <div className='container pt-5'>
            <div className='row'>
            <div className='col-sm-7'>
            <h5  className=" ru pt-sm-5 homeheading2 fw2  text-left card-title">We envision a society <br className="d-none d-sm-block"/> where every one is a <br className="d-none d-sm-block"></br> digital litrate.
            </h5>
            </div>
             <div className='col-sm-5 align-self-center'>
             <a href='/contact' className="btn btn-outline-light whitebtn btnwhite fw2 px-4 py-3">PARTNER
             <img src={Heart} className=" pl-2 d-none d-md-inline" alt=''></img>
            </a>
             </div>
            </div>
            </div>
          </div>
        </div>


    <div className="jumbotron " style={{backgroundColor: "#fff",marginBottom:'0'}}>
       <div className='container'>
       <h1 className=" ro pl-sm-5 pt-sm-5 pt-3 homeheading2 fw1 green text-center pb-4">Subscribe to our News <br/>Letter </h1>
        <input className="form-control form-control-lg mb-sm-5 mb-3" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"12vh"}} type="text" placeholder="exapmle@gmail.com"></input>
       </div>

        </div>
      
     

     



     </main>
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
     <Footer/>
    </div>
   
    );
  }
}

export default Home;
