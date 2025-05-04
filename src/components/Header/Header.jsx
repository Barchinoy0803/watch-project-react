import React from 'react'
import "./Header.scss"
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";
import image from "../../assets/images/watchImage.png"
import heroImage from "../../assets/images/heroImage.png"

const Header = () => {
    return (
        <header className='header'>
            <nav className="container nav__wrapper">
                <div className="nav__logo">
                    <img className='header__image' src={image} alt="" />
                    <p>Mohid</p>
                </div>
                <div className="nav__collection">
                    <a href=""><span>Home</span></a>
                    <a href=""><span>Brands</span></a>
                    <a href=""><span>Recent Products</span></a>
                    <a href=""><span>Contact</span></a>
                    <a href=""><span>About</span></a>
                </div>
                <div className="nav__icons">
                    <IoIosSearch className='search__icon' />
                    <FaUser className='user__icon' />
                    <BiSolidCart className='cart__icon' />
                </div>
            </nav>
            <div className="container hero__wrapper">
                <div className="hero__context">
                    <h1>Discover Most Suitable Watches</h1>
                    <p className='description'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <div className="search__wrapper">
                        <div className="icon__input__wrapper">
                            <IoIosSearch className='search__icon' />
                            <input type="text" placeholder='Find the best brands' />
                        </div>
                        <button>Search</button>
                    </div>
                </div>
                <img className='hero__image' src={heroImage} alt="" />

            </div>
        </header>
    )
}

export default Header