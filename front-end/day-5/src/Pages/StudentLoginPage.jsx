
import '../assets/css/LoginPage.css'

const StudentLoginPage = () => { 
    function offr(){
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
        container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        });
    }
    return (
        <div className="maincontainer">
        <div className="container-us" id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <input type='number' placeholder='Admin Code'  name='admincode'></input>
                <input type="text" placeholder="Name" name='name'/>
                <input type="email" placeholder="Email" name='email'/>
                <input type="password" placeholder="Password" name='password'/>
                <input type="password" placeholder="Confirm Password" name='confirmpassword'/>
                <button>REGISTER</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" name='adminemail'/>
                <input type="password" placeholder="Password" name='adminpassword'/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle-user">
                <div className="toggle-panel toggle-left">
                    <h1>Join Us Today!</h1>
                    <p>Ready to embark on a journey with us? Signing up is quick and easy. Become a part of our vibrant community by creating your account below.</p>
                    <p>If you have an account already,</p>
                    <button className="hidden" id="login" onClick={offr}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Welcome Back!</h1>
                    <p>We are delighted to see you again. Please enter your credentials below to access your account and explore our platform.</p>
                    <p>If you are new here,</p>
                    <button className="hidden" id="register" onClick={offr}>REGISTER NOW</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default StudentLoginPage