import React, { Component } from 'react'
import '../home/styles.css'
import C3 from '../img/c3.png'
// courses 

class AuthCourses extends Component {

    render() {
        
        return (
            <div>
               <div className='container'>
                   <h1 className=''>Track Your Progress </h1>
                   <p className='p text-muted'>We help you know the courses you have stared and acompleted</p>
                   <div>
                       <span >COMPLETED COURSES #{localStorage.getItem("c1grades") === "100" ? <span>1</span> : <span> 0 </span>}</span>
                <span className='pl-2'> COURSES  INPROGRESS #{localStorage.getItem("c1grades") < "100" ? <span>1</span> : <span> 0 </span>}</span>

                   </div>
               </div>
               <hr style={{background: "#C4C4C4",height:'1px',width:'100%'}}></hr>
                <div className='container'>
                <div 
    className="card my-5 small-4"
    style={{maxWidth: "100%",borderRadius: "15px",height: "20rem",border:'none'
    }}
  >
    <div className="row  position-relative" style={{height: "100%"}}>
      <div className="col-6 col-sm-6 ">
        <img
          src={C3}
          
          class="card-img small-4"
          alt="..."
        />
      </div>
      <div class="col-6 col-sm-6  card-body text-left fh" > 
      <h1 className=''>Introduction to Goggle Slides</h1>
                   <p className='p text-muted'>A courses  that help you become good with ggogle slides</p>

                   <div>
                      {localStorage.getItem("c1grades") !== '100' ?    
                    <div>
                    <h1 className='green'>{localStorage.getItem("c1grades")}% </h1>  
                   <button className="btn btn-outline-light whitebtn btnwhite ru fw2 px-4 py-2" style={{background:"#1A9988",borderRadius:"4px"}}>Continue
                  </button>
                    </div>
                   : 
                   <h1 className='pt-3 green fw3'>Completed ✔</h1>  
                   } 
                   
                   </div>
      </div>
                </div>

            </div>
                </div>
                <hr style={{background: "#C4C4C4",height:'1px',width:'100%'}}></hr>
            </div>
        )
    }
}
export default AuthCourses;
