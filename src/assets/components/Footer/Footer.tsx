import { IoMdMail } from 'react-icons/io'
import './Footer.css'
import { FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineFacebook } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-style'>
                <div>
                    <div className='logo-foo'>
                        <img src='./assets/img/title.png' />
                        <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className='line-foo'><div className='icons-foo'><IoMdMail /></div>hello@littlelearners.com</div>
                    <div className='line-foo'><div className='icons-foo'><FaPhoneAlt /> </div>+91 91813 23 2309</div>
                    <div className='line-foo'><div className='icons-foo'><FaLocationDot /></div>Somewhere in the World</div>

                </div>


                <div className='col-foo'>
                    <h5>Home</h5>
                    <p>Features</p>
                    <p>Our Testimonials</p>
                    <p>FAQ</p>
                </div>



                <div className='col-foo'>
                    <h5>About Us</h5>
                    <p>Our Mission</p>
                    <p>Our Vission</p>
                    <p>Awards and Recognitions</p>
                    <p>History</p>
                    <p>Teachers</p>
                </div>



                <div className='col-foo'>
                    <h5>Academics</h5>
                    <p>Special Features</p>
                    <p>Gallery</p>

                </div>



                <div className='col-foo'>
                    <h5>Contact Us</h5>
                    <p>Information</p>
                    <p>Map & Direction</p>
                </div>
            </div>
            <div>
            </div>
            <div className='last-foo'>

                <div className='last-dis'>
                    <div className='foo-p'>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className='icon-dis'>
                        <div className='last-icon'><MdOutlineFacebook /></div>
                        <div className='last-icon'><FaTwitter /></div>
                        <div className='last-icon'><FaLinkedin /></div>
                    </div>
                </div>
                <p className='p-copy'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>


            </div>
        </div>
    )
}

export default Footer
