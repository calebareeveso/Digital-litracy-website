import React, { Component } from 'react'
import '../../navigation/nav/nav.css'
import '../home/styles.css'
import { Redirect,withRouter } from 'react-router-dom';

import fire from '../../../config/fire'
  

 class Login extends Component {
            constructor(props) {
              super(props);
              this.state = {
                redirect : false,
              };
              this.login = this.login.bind(this);
              this.signup = this.signup.bind(this);
            }


          


      
        login(e) {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          e.preventDefault();
          
          if(password.length > 7 && password!=='' && email!== "" && email.match(validMail)){ 

            
          
          fire.auth().signInWithEmailAndPassword( email, password).then((u)=>{
           
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';


            setTimeout(() => {
              document.getElementById('id01').style.display='none';

              this.setState({redirect: true})

              setTimeout(() => {
              this.setState({redirect: false})
              }, 1000);

            }, 2000);
          }).catch((error) => {
              console.log(error);
              document.getElementById('errowmessage').innerHTML =`Incorrect Email or Password `
            setTimeout(() => {
              document.getElementById('errowmessage').innerHTML ='';
            }, 2000);
            });

          }else{
            document.getElementById('errowmessage').innerHTML ='Fill the fields correctly & Password must be greater than 8 Letters';
            setTimeout(() => {
              document.getElementById('errowmessage').innerHTML ='';
            }, 2000);
          }
               
           


        }
      
        signup(e){
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;


          e.preventDefault();
          let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          e.preventDefault();
          
          if(password.length >= 8 && password!=='' && email!== "" && email.match(validMail)){ 
          fire.auth().createUserWithEmailAndPassword(email, password).then((cred)=>{
           console.log(cred)

           document.getElementById('email').value = '';
           document.getElementById('password').value = '';


            setTimeout(() => {
              document.getElementById('id01').style.display='none';
              this.setState({redirect: true})


              setTimeout(() => {
                this.setState({redirect: false})
                }, 1000);


            }, 2000);

           

        })
          .catch((error) => {
              console.log(error);
              document.getElementById('errowmessage').innerHTML ='Email has already be taken by another User!!'
              setTimeout(() => {
                document.getElementById('errowmessage').innerHTML ='';
              }, 2000);
            })
            
          }else {
             document.getElementById('errowmessage').innerHTML ='Fill the fieldes correctly'
            setTimeout(() => {
              document.getElementById('errowmessage').innerHTML ='';
            }, 2000);
          }
                
            

        
        }
    















      switchSignup(){
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
       
    }


 
     


    render() {
        
        return (

            <div>
          {this.state.redirect ?   <Redirect to='/courses'/> : null}

                                
                    <div className='container'>
                        
                    <div className='px-md-5 mx-md-5'>
                    <h1 className=" ro   pb-3 hero-h2 fw1 green text-center login">Login </h1>
                    <h1 className=" ro   pb-3 hero-h2 fw1 green text-center signup">Register</h1>
                    <p className="pl-4 ro small pt-sm-0  fw2 green ">
                </p>
                    {/* SIGNUP  */}
                    {/* <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="Name"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="School"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="number" max='16' min='10' placeholder="age"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="ParentsName"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="tel" placeholder="Parent tel Number"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="text" placeholder="School"></input>
                    <br></br>
                    <input className="form-control form-control-lg signup" style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="email" placeholder="Email"></input>
                    <br></br> */}
                    {/* SIGNUP ENDS  */}

                    {/* login  */}


              
                    <input id='email' name='email'  className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="email" placeholder="email"></input>
                    <br></br>
                    <input id='password' name='password'  className="form-control form-control-lg " style={{padding:"0.7em 0.8em",backgroundColor:" #fff",borderRadius: "12px",border:'4px solid #1A9988',height:"10vh"}} type="password" placeholder="Password"></input>
                    <br></br>


                    {/* login ends  */}
                    <div class="d-flex justify-content-between pb-4" role="group" aria-label="Basic example">

                    <button onClick={this.signup} className='btn glinky text-center ro fw3 
                        hero-p green signup' style={{padding:"0.3em 1em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> SEND</button>

                    <button onClick={this.login} className='btn glinky text-center ro fw3 
                        hero-p green login' style={{padding:"0.3em 1em",backgroundColor:" #fff",border:'4px solid #1A9988'}}> LOGIN</button>
                    </div>
                    
                     <p className='ro text-center' id='errowmessage' style={{color:'red'}}></p>
                     <p className='green text-center login' onClick={this.switchSignup} style={{textDecoration:"underline",cursor:"pointer"}}>Signup</p>
                     <p className='text-center' ><span className='green  signup' onClick={this.switchLogin} style={{textDecoration:"underline",cursor:"pointer"}}>LOGIN</span></p>
                      
                    </div>
                    </div>
                
                    
                   

            </div>
        )
    }
}

export default  withRouter(Login);