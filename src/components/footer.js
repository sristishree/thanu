import React from 'react'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">SRISTI SHREE</span>
          <span>11th May, 2023</span>
        </div>
        <div className="footer-container2">
          {/* <div className="footer-container5">
            <h3>Social Follow</h3>
            <div>
              <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                <i className="fa fa-youtube fa-5x"></i>
              </a>
              <a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social">
                <i className="fa fa-facebook fa-5x"></i>
              </a>
              <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <i className="fa fa-twitter fa-5x" ></i>
              </a>
              <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">
                <i className="fa fa-instagram fa-5x"></i>
              </a >
            </div>
          </div > */}
        </div >
      </div >
      <img
        alt="image"
        src="/thanu/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer >
  )
}

export default Footer
