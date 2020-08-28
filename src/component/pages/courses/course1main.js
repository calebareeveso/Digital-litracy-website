import React, { Component } from 'react'
import './cources.css'
import {
    Link
 } from "react-router-dom";
import FooterClone from '../../navigation/footer/footerClone'



 class course1main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          score:"10",
          slice: 3,
          slicel: 2,
          disable: true,
          grade: 0
        };
      }
    
    componentDidMount(){
        document.getElementById('pass').disabled = this.state.disable;

       

                // const getgrads = localStorage.getItem("c1grades");
                // this.setState({grade: getgrads});
      
        const sl = localStorage.getItem("sl");
        const sr = localStorage.getItem("sr");
    // this.mypass()
    this.setState({slicel: sl});
    this.setState({slice: sr});
    }

    componentDidUpdate(prevState, prevProps) {
       if( this.state.score !== '110') {
       document.getElementById('pass').disabled = this.state.disable
       document.getElementById('id4').disabled = !this.state.disable
       }else{
        console.log('err')
       }
       
       this.myset()
    }
    mypass(e){
        
        this.setState({disable: true});
        this.setState({score: e});
        
        
        switch (e) {
            case "10":
         this.setState({slicel: 0});
         this.setState({slice: 1});

        
                break;
            case "25":
         this.setState({slicel: 1});
         this.setState({slice: 2});

         
                break;
            case "50":
         this.setState({slicel: 2});
         this.setState({slice: 3});


         
        
                break;
            case "75":
         this.setState({slicel: 3});
         this.setState({slice: 4});


         
                break;
            case "100":
         this.setState({slicel: 4});
         this.setState({slice: 5});


        
       
                break;
            case "110":
         this.setState({slicel: 5});
         this.setState({slice: 6});

                break;
        
            default:  this.setState({slicel: 0});
            this.setState({slice: 1});
    }
   
    }

   myset(){
    const a = this.state.slicel;
    const b = this.state.slice
    localStorage.setItem("sl", a);
    localStorage.setItem("sr", b);
   }
  

    mycheck(e){
        // var grade = [];
    
        
        if( this.state.score === '110') {
        
           
        }else{


        

            this.setState({disable: false});

        
            if(e === 'True'){
                let inintgrade = this.state.grade + 25;
                
                this.setState({grade: inintgrade});

                localStorage.setItem("c1grades", this.state.grade);
                const getgrads = localStorage.getItem("c1grades");

               
            }else{
                console.log('Thank you Jesus')
            } 
            console.log(e)
            console.log(this.state.grade)
        

    }

         }


    render() {

        const challenges = [
            { task: 1,title:'Challenge 1', dis: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra lectus per maecenas facilisi ligula massa, felis ultrices consequat vestibulum varius tincidunt. Taciti nunc laoreet dui ligula sodales penatibus tempor nascetur, at litora malesuada ultricies cras tellus platea. A potenti mi pharetra consequat dignissim urna vulputate feugiat scelerisque dictum facilisi convallis, ultrices lectus turpis libero mauris maecenas ornare erat taciti nibh fringilla.",id1:'id1', btn:'Yes',type1: 'false',id2:'id2',btn2:'No',type2: 'false',id3:'id3',btn3:'No',type3: 'false',id4:'id4',btn4:'Yes',type4: 'True',score: "25",},

            { task: 2,title:'Challenge 2', dis: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra lectus per maecenas facilisi ligula massa, felis ultrices consequat vestibulum varius tincidunt. Taciti nunc laoreet dui ligula sodales penatibus tempor nascetur, at litora malesuada ultricies cras tellus platea. A potenti mi pharetra consequat dignissim urna vulputate feugiat scelerisque dictum facilisi convallis, ultrices lectus turpis libero mauris maecenas ornare erat taciti nibh fringilla.",id1:'id1', btn:'Yes',type1: 'false',id2:'id2',btn2:'No',type2: 'false',id3:'id3',btn3:'No',type3: 'false',id4:'id4',btn4:'Yes',type4: 'True',score: "50",},

            { task: 3,title:'Challenge 3', dis: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra lectus per maecenas facilisi ligula massa, felis ultrices consequat vestibulum varius tincidunt. Taciti nunc laoreet dui ligula sodales penatibus tempor nascetur, at litora malesuada ultricies cras tellus platea. A potenti mi pharetra consequat dignissim urna vulputate feugiat scelerisque dictum facilisi convallis, ultrices lectus turpis libero mauris maecenas ornare erat taciti nibh fringilla.",id1:'id1', btn:'Yes',type1: 'false',id2:'id2',btn2:'No',type2: 'false',id3:'id3',btn3:'No',type3: 'false',id4:'id4',btn4:'Yes',type4: 'True',score: "75",},

            { task: 4, title:'Challenge 4', dis: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra lectus per maecenas facilisi ligula massa, felis ultrices consequat vestibulum varius tincidunt. Taciti nunc laoreet dui ligula sodales penatibus tempor nascetur, at litora malesuada ultricies cras tellus platea. A potenti mi pharetra consequat dignissim urna vulputate feugiat scelerisque dictum facilisi convallis, ultrices lectus turpis libero mauris maecenas ornare erat taciti nibh fringilla.",id1:'id1', btn:'Yes',type1: 'false',id2:'id2',btn2:'No',type2: 'false',id3:'id3',btn3:'No',type3: 'false',id4:'id4',btn4:'Yes',type4: 'True',score: "100",},

            { task: 5,title:'Challenge 5', dis: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra lectus per maecenas facilisi ligula massa, felis ultrices consequat vestibulum varius tincidunt. Taciti nunc laoreet dui ligula sodales penatibus tempor nascetur, at litora malesuada ultricies cras tellus platea. A potenti mi pharetra consequat dignissim urna vulputate feugiat scelerisque dictum facilisi convallis, ultrices lectus turpis libero mauris maecenas ornare erat taciti nibh fringilla.",id1:'id1', btn:'Yes',type1: 'false',id2:'id2',btn2:'No',type2: 'false',id3:'id3',btn3:'No',type3: 'false',id4:'id4',btn4:'Yes',type4: 'True',score: "110",},
            { task: 5,title:'Congratulation You did it🤗!!', dis:"",score: "10",},

          ];
          console.log(challenges)

         
        return (
            <div>
            <div className='jumbotron mb-0' style={{position:'relative'}}>
              <div >
              <div className='container' >
                   {/* .slice(this.state.score). */}
              { challenges.slice(this.state.slicel,this.state.slice).map((qus, index) => (
                 
                 <div> <span className='p'>{qus.task}/{challenges.length - 1}</span>
                       
                      <div  className=' py-5 '> <p className='hero-h'>{qus.title}</p> <p className='heading2'>{qus.dis}</p></div>
             
                      
   
                      <div>
                            {this.state.score !== '110'?
                        
                        <div>
                             <div>

                                <div>  <button id='id1' onClick={() => this.mycheck(qus.type1)} className='btns '>{qus.btn}</button> 
                                <button id='id2' onClick={() => this.mycheck(qus.type2)} className='btns '>{qus.btn2}</button> 
                                <button id='id3' onClick={() => this.mycheck(qus.type3)} className='btns '>{qus.btn3}</button> 
                                <button id='id4' onClick={() => this.mycheck(qus.type4)} className='btns '>{qus.btn4}</button> 
                                </div>





                                </div>
                                <button id='pass' onClick={() => this.mypass(qus.score)}>NEXT({this.state.score})</button>
                        </div>


                       : 
                         
                         <div style={{paddingTop:"8em"}} className='text-center'> 
                          <Link id='passid' className='heading2' to='/courses'>Completed</Link>
                         </div>
                        
                        } 
                        </div>

                      </div>
                      
                      ))
                      }
                  <div>
     
       </div>
              </div>
              </div>
            </div>
            <FooterClone/>
            </div>

        )
    }
}

export default  course1main;