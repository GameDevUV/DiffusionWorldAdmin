import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import '../../css/Navigation.css'


const Header = () => {
    const [AniClass1, setAniClass1] = useState("ham up");
    const [AniClass2, setAniClass2] = useState("ham down");
    const [AniClassno, setAniClassno] = useState("ham mid");
    const [AniClassSlide, setAniClassSlide] = useState("SlideAnimation2");
    const [hamburgerTrigger, setHamburgerTrigger] = useState(false);
    const RunHamburger = () => {
        if (!hamburgerTrigger) {
            setAniClass1(" ham-ani-left");
            setAniClass2(" ham-ani-right");
            setAniClassno("hamNone");
            setAniClassSlide("SlideAnimation");
            setHamburgerTrigger(true);
        } else {
            setAniClass1("ham up");
            setAniClass2("ham down");
            setAniClassno("ham mid");
            setAniClassSlide("SlideAnimation2");
            setHamburgerTrigger(false);
        }
    }

    return (
        <>
            <div className="navbar">
                <div className="top">
                    <div className="logoPart">
                        <NavLink to="/"><span className='Span1'>DIFFUSION </span> <span className='Span2'>WORLD</span></NavLink>
                    </div>
                    <div className="navPart">
                        <ul className="Nav-ul">
                            <NavLink className={({ isActive }) => `${isActive ? "active" : ""}`} to="/"><li className="nav-li">Home</li></NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? "active" : ""}`} to="/Stacks"><li className="nav-li">Stacks</li></NavLink>
                        </ul>
                    </div>
                    <div className="Hamburger" onClick={RunHamburger}>
                        <span className={AniClass1}></span>
                        <span className={AniClassno}></span>
                        <span className={AniClass2}></span>
                    </div>
                </div>
                <div className="hamburger-menu-slide" id={AniClassSlide}>
                    <div className="menu-slid">
                        <ul className="ham-slide-ul">
                        <NavLink className={({ isActive }) => `${isActive ? "active" : ""}`} to="/"><li className="nav-li">Home</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "active" : ""}`} to="/Stacks"><li className="ham-slide-li">Stacks</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="SocialMediaAndContact">
                        <ul className="Social-ul">
                            <a href="https://www.instagram.com/game_dev_uv/?utm_source=ig_web_button_share_sheet"><li className="social-li"><AiFillInstagram size={25} /></li></a>
                            <a href=""> <li className="social-li"><AiFillYoutube size={25} /></li></a>
                            <a href="">  <li className="social-li"><AiFillTwitterCircle size={25} /></li></a>
                            <a href="https://github.com/GameDevUV"> <li className="social-li"><AiFillGithub size={25} /></li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header