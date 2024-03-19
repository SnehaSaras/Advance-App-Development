
import '../../assets/css/AdminCss/AdminHeader.css'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { logout } from '../UserSlice';

const AdminHeader = () => {
  const navigate = useNavigate() ;
  // const dispatch = useDispatch()
  const handleLog = (e) => {
    e.preventDefault();
        // dispatch(logout());
    navigate("/")
  }
  return (
    <div className='admin-header-container'>
            <h1>TECHTITAN <span>Admission Center</span></h1>
            <button className="logoutbutton" onClick={handleLog}>LogOut</button>
        </div>
  )
}

export default AdminHeader
