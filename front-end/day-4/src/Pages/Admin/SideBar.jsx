
import "../../assets/css/SideBar.css"
import { Link, } from 'react-router-dom';

const SideBar = () => {
    //const navigate = useNavigate() ;
    return (
        <div className="sidebar-container">
            <nav>
            
            <div className="menu-items">
            <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminAddInstitute">
                                    Add Institute
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminViewIns">
                                    View Institute
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminAddCourse">
                                    <span className='link-name'>Add Course</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminViewCou">
                                    <span className='link-name'>View Course</span>
                              </Link>
                        </li>
                  
                        <li>
                              <Link className='link-text' to="/adminViewStudentList">
                                    <span className='link-name'>View Student List</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminViewAdmissionList">
                                    <span className='link-name'>View Admission List</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminViewPayment">
                                    <span className='link-name'>View Payment</span>
                              </Link>
                        </li>
                        
                  </ul>
            </div>
        </nav>
        </div>
    )
}

export default SideBar ;