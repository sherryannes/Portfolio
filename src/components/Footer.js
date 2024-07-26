import React from 'react'
import "./FooterStyles.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className='location'>
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                    <div>
                        <p>Ktown,Los Angeles</p>
                    </div>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}/>
              sherryanneshen@gmail.com
            </h4>
          </div>
            </div>           
            <div className="right">
                <h4>About Me</h4>
                <p>This is Sherryanne Shen. I enjoy challege myself. </p>
                <div className="social">
                    <FaGithub size={30} style={{ color:"#fff", marginRight:"1rem" }} />
                    <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer