import React from 'react'
import { Button } from './Button'
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className="hero-container">
            <video src='/videos/video-2.mp4' autoPlay loop muted></video>
            <h1>Hello this is gonna be cool</h1>
            <p>Trying to pull this off as soon as possible</p>
            <div className='hero-btns'>
                <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Your Button
                </Button>
                <Button className="btn"  buttonSize='btn--large'>
                   Check this out
                </Button>
            </div>
        </div>
    )
}

export default Hero
