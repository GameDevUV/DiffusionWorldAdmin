import React from 'react'
import '../../css/Footer.css'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="top">
          <div className="left-Footer">
            <h3 className="Email">techiboy116@gmail.com</h3>
          </div>
          <div className="Right-Footer">
            <div className="footer-contact">
              <ul className="ft-contact">
                <a href="https://www.instagram.com/game_dev_uv/?utm_source=ig_web_button_share_sheet"><li className="ft-contact"><AiFillInstagram size={25} /></li></a>
                <a href=""><li className="ft-contact"><AiFillYoutube size={25} /></li></a>
                <a href=""><li className="ft-contact"><AiFillTwitterCircle size={25} /></li></a>
                <a href="https://github.com/GameDevUV"><li className="ft-contact"><AiFillGithub size={25} /></li></a>
              </ul>
            </div>
          </div>
        </div>
        <div className="Copy"><p className="CopyRightClaim">AllRightsREasrved@2022</p></div>
      </div>
    </>
  )
}

export default Footer