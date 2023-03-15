import React from 'react'
import windows from '../../Assets/images/windows.png'
const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Plan Your Travel With Confidence</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid recusandae voluptatum itaque doloremque</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div> 

            <div className="singleInfo">
              <span className="number colourOne">02</span>
              <h4>Chauffeur Services</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div>

            <div className="singleInfo">
              <span className="number colourTwo">03</span>
              <h4>Multi-Risk Travel Insurance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div> 
          </div>

          <div className="imgDiv">
            <img src={windows} className="windowGrid"alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
