
import video1 from '../../assets/videos/1.mp4'
import '../../assets/css/StudentLogin.css'
import { Link } from 'react-router-dom'

const StudentLogin = () => {
  return (
    <div>
      <div className="login-container">
        <video src={video1} autoPlay loop muted></video>
        <div className="login-sub"> 
            <div className="login-con">    
                <h1>STUDENT LOGIN</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='E-Mail' />
                <input type="text" placeholder='Password' />
                <button>Login</button>
                <span>Do not Have an Account? <Link className='link-re' to="/signupStudent">Register Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
