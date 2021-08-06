import React,{useState} from 'react'
import '../Display.css'
import RadioButtons from './RadioButtons'
import desk from '../images/desk.jpeg'
import mobi from '../images/mobi.jpeg'

function Display() {

    const [phoneNo, setPhoneNo] = useState("+91")
    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }
    
    const screenWidth=window.screen.width;
    console.log(screenWidth);
    const styleImg=screenWidth>670?{
        backgroundImage:`url(${desk})`,
    }:{
        backgroundImage:`url(${mobi})`,
    }
    return (
        <div className="display">
            <div className="container">
                <div className="left">
                    <div className="left_cont">
                        <div className="head">Join India's first investing app for teenagers and grow your money.</div>
                        <div className="info_cont">
                            <div className="info">
                                Get early access on Zupay and build better financial habits.
                            </div>
                            <div className="info">
                                Learn to save and invest money and get amazing offers and cashback for referring others.
                            </div>
                        </div>
                    </div>
                    <div className="toggle_button">
                        <div id="t1"></div>
                        <div id="t2"></div>
                    </div>
                </div>
                <div className="right"
                style={styleImg}
                >
                    <div className="center">
                        <div className="center_cont">
                            <div className="center_head">
                                Lets get started!
                            </div>
                            <div className="center_info">Join our Waitlist, it will just take 60 seconds...</div>
                            <span className="cenetr_label">Full Name<input type="text" className="center_input"/></span>
                            <span className="cenetr_label">Email<input type="email" className="center_input"/></span>
                            <span className="cenetr_label">Mobile no.<input type="text" onChange={handlePhoneNo} value={phoneNo} className="center_input"/></span>
                            <div className="center_radio_buttons">
                            <RadioButtons/>
                            </div>
                            <button className="center_button">VERIFY WITH OTP</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Display
