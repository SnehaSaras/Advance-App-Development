
import "../../assets/css/HomePage.css"

import home_back from '../../assets/videos/4.mp4'
import LogoutHeader from './LogoutHeader';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const HomePage = () => {
    const navigate = useNavigate() ;
    function handleExplore()
    {
        navigate("/loginStudent")
    }
    return (
        <div>
            <div className="header-student">
                <LogoutHeader/>
            </div>
            <div className="home-container">
                <video src={home_back} alt="" autoPlay loop muted/>
                <div className="home-content">
                    <h1>Infinite to College admission portal!</h1>
                    <p>Congratulations on taking the first step towards shaping your future. We believe that education is not just about acquiring knowledge but also about fostering personal growth and realizing your dreams.
                    </p>
                    <p>Our portal serves as your gateway to exploring endless opportunities for academic excellence, personal development, and community engagement. </p>
                    <div className='ex-div'>
                    <button onClick={handleExplore}>Explore</button>
                    </div>
                </div>
            </div>
            <div className='home-middle'>
                <h1 className='head-middle'>Our Contribution</h1>
                <p>Welcome to our college admission portal, your gateway to a world of educational opportunities! Here, we showcase the collective contributions of colleges nationwide, offering students a comprehensive platform to explore their academic futures. Our portal stands out for three key reasons:</p>
                <div className='card-home'>
                    <div className="card1">
                        <h1>Extensive Diversity of Options</h1>
                        <p>With a vast array of colleges and universities participating in our portal, students have unparalleled access to diverse educational options. Whether you are interested in large research universities, small liberal arts colleges, specialized institutions, or community colleges, you will find a wide range of choices to suit your preferences, interests, and career goals.</p>
                    </div>
                    <div className="card2">
                        <h1>Streamlined Application Process</h1>
                        <p>We understand that the college application process can be daunting, which is why we have streamlined it to make it as efficient and user-friendly as possible. Through our portal, students can submit a single application to multiple colleges, saving time and reducing paperwork. Our intuitive interface guides students through each step of the application process.</p>
                    </div>
                    <div className="card3">
                        <h1>Comprehensive Resources</h1>
                        <p> Navigating the college admission journey can be complex, but our portal is here to provide comprehensive resources and support every step of the way. Whether you have questions about financial aid, admissions requirements, campus life, or academic programs, our platform offers a wealth of information to help you make informed decisions. </p>
                    </div>
                </div>

            </div>  
            <div className='contact-us'>
                <h1>CONTACT US</h1>
                <p>Have questions or feedback? We had love to hear from you! Reach out through the form</p>
                <form action="" className='form-contact'>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
            <div className="footer-main">
                <div className="footer-sec">
                    <div className="section1">
                        <h1>About Us</h1>
                        <p>Welcome to the Admission Portal for Colleges. We are dedicated to simplifying the college admissions process for students worldwide. Our mission is to empower you with easy access to information, resources, and support to navigate your journey successfully.</p>
                    </div>
                    <div className="section2">
                        <h1>Navigations</h1>
                        <Link className='link-footer'>Institutes</Link>
                        <Link className='link-footer'>Courses</Link>
                        <Link className='link-footer'>Student Details</Link>
                        <Link className='link-footer'>Status</Link>
                        <Link className='link-footer'>Payment</Link>
                        <Link className='link-footer'>Payment History</Link>
                    </div>
                    <div className="section3">

                        <h1>Contact Us</h1>
                        <p>Coimbatore, TamilNadu</p>
                        <p>techtitanadmission@gmail.com</p>
                        <p>+(92)293039485</p>
                        <p>+(92)384755738</p>
                    </div>
                    <div className="section4">

                        <h1>UseFul Link</h1>
                        <div className='ico'>
                            <p><FaFacebook /></p>
                            <Link className='link-footer'>www.facebook.com/techtitansadmission</Link>
                        </div>
                        <div className='ico'>
                            <p><FaInstagram /></p>
                            <Link className='link-footer'>www.instagram.com/techtitansadmission</Link>
                        </div>
                        <div className="ico">
                            <p><FaLinkedin /></p>
                            <Link className='link-footer'>www.linkedin.com/techtitansadmission</Link>
                        </div>
                        <div className="ico">
                            <p><FaTwitter /></p>
                            <Link className='link-footer'>www.twitter.com/techtitansadmission</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage