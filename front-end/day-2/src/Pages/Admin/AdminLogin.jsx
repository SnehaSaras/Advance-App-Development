
import video1 from '../../assets/videos/3.mp4'
import '../../assets/css/StudentLogin.css'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>
      <div className="login-container">
        <video src={video1} autoPlay loop muted></video>
        <div className="login-sub">
            <div className="login-con">    
                <h1>ADMIN LOGIN</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='E-Mail' />
                <input type="text" placeholder='Password' />
                <button>Login</button>
                <span>Dont Have an Account? <Link className='link-re' to="/signupAdmin">Register Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
