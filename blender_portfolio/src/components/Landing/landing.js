import React from 'react'
import '../../assets/styles/landing.css'
// import btnImg from '../../assets/images/learn_more.jpg'
import { Link } from 'react-scroll';

const landing = () => {
  return (
    <section id="landing">
      <div className="landingContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Sungmin </span>
          <br></br> an Avid Engineer & Programmer!
        </span>
        <p className="introParagraph">I am also an aspiring entrepreneur and a part-time foodie & chef who is devoted to making an impact in society by helping marginalized groups</p>
        <Link><button className="btn"><img src="https://placehold.co/100x80" alt="" className="btnImg"/>Learn More</button></Link>
     {/* change btnImg css properties when added */}
      </div>
      <img src="https://placehold.co/300x400" alt="profile" className="background"/>
    </section>

  )
}

export default landing