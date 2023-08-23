import React from 'react'
import "./About.css"
import hackathon from "../../img/hackathon.jpg"
import iste from "../../img/iste.jpeg"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={hackathon} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Skills and Interests
        </p>
        <p className="a-desc">
          I have proficiency in languages like C++, python, DBMS. I have developed this website as one of my projects.
          I have been part of the ISTE community at SRM University NCR Campus.
          My interests include participating in hackathons and competing in Sports.
        </p>
        <div className="a-award">
          <img src={iste} alt="" className="a-award-img" />
          </div>
        </div>
    </div>
  )
}

export default About