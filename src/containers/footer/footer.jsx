import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import './footer.css'

const Footer = () => {
  return (
    <section className="w-[calc(100vw-32)] ms:w-[calc(100vw-96)]" id="footer">
      <ul className="app__footer-list">
        <div className="app__footer-list_col">
          <h4 className="app__footer-list_col-title">Email</h4>
          <div className="app__footer-list_col-item" href="mailto:spencerccarlson0@gmail.com">spencerccarlson0@gmail.com
          </div>
        </div>
      </ul>
      <div className="app__footer-icon_container">
        <div className="app__footer-slogan_container">
          <p className="app__footer-slogan">Bringing passion to every project.</p>
        </div>
        <br />
        <div className="app__footer-social_container">
          <a href="https://github.com/anomic84" className="app__footer-social_icon">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://github.com/ahttps://www.linkedin.com/in/spencer-carlson-59054a259" className="app__footer-social_icon">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://www.instagram.com/spencercarlsonmusic/" className="app__footer-social_icon">
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer