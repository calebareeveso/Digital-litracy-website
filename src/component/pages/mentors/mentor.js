import React, { Component } from 'react'
import '../home/styles.css';
import Heroh from '../img/mentorhero.png'
import Footer from '../../navigation/footer/footer'

// mentors 
import M1 from '../../pages/img/m1.png'
import M2 from '../../pages/img/m2.png'
import M4 from '../../pages/img/m4.png'
import M5 from '../../pages/img/m5.png'
import M6 from '../../pages/img/m6.png'

import Twitter2 from '../../pages/img/twitter2.svg'
import Slack from '../../pages/img/slack.svg'
import Linkedin from '../../pages/img/linkedin.svg'


export default class mentor extends Component {
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

              <div class="card carddy text-white position-relative" >
          <img class="card-img img-fluid" src={Heroh} alt="images" style={{height:'60vh'}}></img>
          <div class="card-img-overlay" >
            <div className='container pt-5 d-flex justify-content-center align-items-center ' style={{height:'37vh'}}>
            <h1 className=" ru pl-sm-4 pt-sm-4 hero-h white">MENTORS</h1>
            </div>
          </div>
        </div>


        <div  className="jumbotron " style={{backgroundColor: "#fff",marginBottom:'0'}}>
       

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
  <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Grace Areeveso</p>

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
          src={M4}
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
            <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Adoara Ikegwuonu </p>

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
          src={M5}
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
            <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Erioluwa Adeyinka </p>

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
          src={M6}
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
            <p className="  ro fw3 p green pt-sm-0 pb-sm-2 text-center">Caleb Areeveso </p>

            </div>

            </div>





            </div>
            </div>
            </div>
            <div  className="jumbotron " style={{backgroundColor: "#1A9988",marginBottom:'0'}}>
            <div className='container pt-5'>
            <div className='row'>
            <div className='col-sm-7'>
            <h5  className=" ru  hero-h fw2  text-left white">Meet The Mentors</h5>
            <p className="fw-3 p ro p pt-sm-0 pb-sm-2  white">Join Our slack Workspace And get to<br className="d-none d-sm-block"/> know the mentors.</p>
            </div>
             <div className='col-sm-5  pt-4 pb-5 mb-3'>
             <button type="button" onClick={() => this.navopen()} className="btn btn-outline-light btnwhite whitebtn fw2 px-4 py- ru homeheading1">JOIN
             <img src={Slack} className=" pl-2" style={{width: "2em"}}alt=''></img>
            </button>
             </div>
            </div>
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


            <Footer/>
            </div>
        )
    }
}
