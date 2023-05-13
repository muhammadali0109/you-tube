import React from 'react'
// import { useState } from 'react'

import {BsYoutube} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiVidiconLine} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {VscFileSymlinkDirectory} from 'react-icons/vsc'
import {RiFilePaper2Line} from 'react-icons/ri'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {CgGames} from 'react-icons/cg'

import "../Header/Header.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'
import FetchData from './FetchData'
import Register from '../Register/Register'

function Header() {
    const [color , setColor] = useState(false);
    const handleChange = ()=>{
    setColor(!color)
    } 
    const [displayB , setDisplayB] = useState(false);
    const handleChange2 = ()=>{
    setDisplayB(!displayB)
    } 


    //fetch


    //
    return (
        

        <div className={color ? 'dark' : 'white'}>
        <header>
        <div className='NavBar'>
                <nav className='NavBar__nav'>
                <div className='container'>
                     <div className='NavBar__nav__div'>
                     <button onClick={handleChange2} className='change-btn'><RxHamburgerMenu className='hamburger'/></button>
                         
                         <div className='navBar_nav_logo'>
                             <BsYoutube className='logotip'/>
                             <span className='NavBar__nav__logo__span'>YouTube</span>
                         </div>
                         <form method='POST' className='NavBar__nav__div__form'>
                             <div className='NavBar__nav__div__form__inp'>
                                 <input type='text' placeholder='Search' className='search'/>
                                 <AiOutlineSearch className='inpSerchImg'/>
                             </div>
                         </form>
                         <div className='NavBar_nav__companents'>
                             <RiVidiconLine className='vidio'/>
                             <TbGridDots className='dots'/>
                             <IoMdNotificationsOutline className='notification'/>
                             <RxAvatar className='person'/>
                         </div>
                     </div>

                </div>     
                </nav>
                <div className='container'>
        <div className='hero'>
        <div className={displayB ? 'dislayNone' : 'displayBlok'}>
        <div className='sidebar'>
                     <div>
                         <div className='home'>   
                             <Link to="/" className='home__link'><AiOutlineHome className='home__img'/> Home</Link>
                         </div>
                         <div className='trending'>
                             <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/>Trending</Link>
                         </div>
                         <div className='Subscriptions'>
                             <Link to="/Subscriptions" className='Subscriptions__link'><MdOutlineSubscriptions className='Subscriptions__img'/>Subscriptions</Link>
                         </div>
                     </div>
                     <div>
                         <div className='Library'>
                             <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/>Library</Link>
                         </div>
                         <div className='History'>
                             <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/>History</Link>
                         </div>
                         <div className='Watch'>
                             <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/>Watch</Link>
                         </div>
                         <div className='Favourites'>
                             <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/>Favourites</Link>
                         </div>
                         <div className='Like'>
                             <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/>Liked videos</Link>
                         </div>
                         <div className='Music'>
                             <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/>Music</Link>
                         </div>
                         <div className='Games'>
                             <Link to="/Games" className='Games__link'><CgGames className='Games__img'/>Games</Link>
                         </div>
                         <button onClick={handleChange} className='change-btn'>DarkMode/LightMode</button>
                     </div>
        </div>
        </div>
        {/* <div className={color ? 'dark' : 'white'}> */}
        <FetchData/>
        <Register/>
        {/* </div> */}
        <div className='sidebar__bottom'>
                     <div className='sidebar__bottom__1 grid gap-5 grid-cols-9'>
                             <div className='home'>   
                                 <Link to="/" className='home__link'><AiOutlineHome className='home__img'/></Link>
                             </div>
                             <div className='trending'>
                                 <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/></Link>
                             </div>
                             <div className='Subscriptions'>
                                 <Link to="/Subscriptions" className='Subscriptions__link'><MdOutlineSubscriptions className='Subscriptions__img'/></Link>
                             </div>
                             <div className='Library'>
                                <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/></Link>
                             </div>
                             <div className='History'>
                                <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/></Link>
                             </div>
                             <div className='Watch'>
                                <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/></Link>
                             </div>
                             <div className='Favourites'>
                                <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/></Link>
                             </div>
                             <div className='Like'>
                                <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/></Link>
                             </div>
                             <div className='Music'>
                                <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/></Link>
                             </div>
                             <div className='Games'>
                                <Link to="/Games" className='Games__link'><CgGames className='Games__img'/></Link>
                             </div>
                             <div className='darkMode'>
                             <button onClick={handleChange} className='change-btn'>DarkMode/LightMode</button>

                             </div>

                        </div>
        </div>
        </div>
        </div>
        </div>
        </header> 
        </div>

      )
}

export default Header