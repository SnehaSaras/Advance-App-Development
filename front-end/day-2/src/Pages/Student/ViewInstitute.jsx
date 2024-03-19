import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from './SideBar'
import "../../assets/css/ViewInstitute.css"
import institute_details from '../../assets/others/InstituteDetails'

const ViewInstitute = () => {
  // console.log(institute_details);
  const listItems = institute_details.map((item) =>
    <div className='card' key={item.id}>
      <div className="cardheader">
        <h2>{item.institute_name}</h2>
        <p>{item.description}</p>
        <p><strong>Location: </strong>{item.location}</p>
        <p><strong>Contact number: </strong>{item.contact}</p>
        <p><strong>Email: </strong>{item.email}</p>
        <p><strong>Course Available: </strong>{item.courseAvail}</p>
      </div>
    </div>
  );
  return (
    <div>
    <StudentHeader/>  
    <div className='ins-main'>
      <div className="institute-main">
        {listItems}
      </div>
    </div>
    </div>
  )
}

export default ViewInstitute
