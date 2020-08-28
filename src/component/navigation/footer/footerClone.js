import React, { Component } from 'react'

import './footer.css'

export default class footerClone extends Component {
    render() {
        return (
          <div>
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

