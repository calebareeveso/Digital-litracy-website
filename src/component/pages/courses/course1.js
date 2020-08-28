import React, { Component } from 'react'
import '../home/styles.css'
import Star from '../img/star.svg'
import {
    Link
 } from "react-router-dom";
import Footer from '../../navigation/footer/footer'
export default class course1 extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron c1 mb-0" >
                <div className='container'>
                <div className='row '>
                <div className='col-md-7'>
                <h5  className=" ru pt-sm-5 hero-h fw2  text-left white">Introduction To <br className='d-none d-sm-block'></br>
Google Slides
                </h5>
                <div className='d-flex py-1'>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <p className=" ro card-text pr-1 fw3 p text-white">4.2 (5 reviews)</p>
                </div>
                <button type="button" className="my-3 btn btn-light rounded-0"><Link to='/courses|course1main' className=" btn  rounded-0 heading2 ro">Get Started</Link></button>
                </div>
                <div className='col-md-5 align-self-center'>
               
                </div>
                </div>
                </div>   
                </div>


                <div className="jumbotron mb-0" >
                   <div className="container">
                   <h1 className='homeheading2 ru green'>
                        About This Course
                    </h1>
                    <p className='p ro pt-2' style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur, adipiscing elit fusce torquent donec nulla, suscipit est nostra bibendum. Viverra dapibus in diam eu cursus enim ante sem, laoreet cubilia phasellus nullam semper eget consequat, pharetra auctor pretium non imperdiet et sociis. Mattis ullamcorper iaculis elementum urna sollicitudin platea varius aliquam, felis interdum eget tempor imperdiet ultricies sociosqu sapien, metus placerat purus sed natoque volutpat class. Placerat magna neque augue morbi lacinia curabitur, nibh ac parturient ultrices ut sapien, etiam cursus est rutrum tincidunt. Iaculis vivamus hendrerit turpis velit parturient quam nam elementum natoque, class ornare metus et luctus ante integer lacinia, nisi hac aliquet cras gravida a sociosqu dapibus.</p>

                   <div>
                   <h1 className='heading2 ru pt-4'>
                       Challenge 1
                    </h1>
                    <p className='p ro ' style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur, adipiscing elit fusce torquent donec nulla, suscipit est nostra bibendum. Viverra dapibus in diam eu cursus enim ante sem, laoreet cubilia phasellus nullam semper eget consequat, pharetra auctor pretium non imperdiet et sociis. Mattis ullamcorper iaculis elementum urna sollicitudin platea varius aliquam.</p>
                  </div>


                  <div>
                   <h1 className='heading2 ru pt-4'>
                       Challenge 2
                    </h1>
                    <p className='p ro ' style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur, adipiscing elit fusce torquent donec nulla, suscipit est nostra bibendum. Viverra dapibus in diam eu cursus enim ante sem, laoreet cubilia phasellus nullam semper eget consequat Mattis ullamcorper iaculis elementum urna sollicitudin platea varius aliquam.</p>
                  </div>

                  <div>
                   <h1 className='heading2 ru pt-4'>
                       Challenge 3
                    </h1>
                    <p className='p ro' style={{fontWeight:'400'}}> Viverra dapibus in diam eu cursus enim ante sem, laoreet cubilia phasellus nullam semper eget consequat, pharetra auctor pretium non imperdiet et sociis. Mattis ullamcorper iaculis elementum urna sollicitudin platea varius aliquam.</p>
                  </div>


                  <div>
                   <h1 className='heading2 ru pt-4'>
                       Challenge 4
                    </h1>
                    <p className='p ro ' style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur, adipiscing elit fusce torquent donec nulla, suscipit est nostra bibendum pharetra auctor pretium non imperdiet et sociis. Mattis ullamcorper iaculis elementum urna sollicitudin platea varius aliquam.</p>
                  </div>


                  <div>
                   <h1 className='heading2 ru pt-4'>
                       Challenge 5
                    </h1>
                    <p className='p ro ' style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, faucibus ultrices porttitor purus litora lobortis dictumst. Eleifend dictum iaculis duis ad natoque himenaeos venenatis facilisi, dignissim netus metus odio taciti posuere id, libero platea ac vulputate vitae pulvinar auctor. Magnis odio pulvinar nostra ridiculus potenti ante mauris primis, vestibulum vulputate facilisis nam cubilia nullam lectus, hendrerit leo et suscipit ultricies arcu laoreet. Tortor aliquam parturient volutpat hendrerit sollicitudin nam posuere mus magnis, platea luctus dapibus ridiculus tristique maecenas lacus nunc fames, tincidunt eros dictumst erat nisl nostra risus libero.</p>
                  </div>
                   </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
