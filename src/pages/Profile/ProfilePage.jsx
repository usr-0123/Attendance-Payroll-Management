import Profile from '../../assets/alexander.jpg'

import './EmployeeProfilePage.scss'

import { RiEdit2Fill } from "react-icons/ri";

const ProfilePage = () => {
    return (
        <div className="profile">
            <div className="profileMine">
                <div className="profileMineNavbar">My Profile</div>
                <div className="profileMineBottom">
                    <div className="profileMineBottomImg">
                        <img src={Profile} alt="profile" height={100}/>
                        <button><RiEdit2Fill /></button>
                    </div>
                    <div className="profileMineBottomDetails">
                    <div className='profileMineBottomDetailsNames'>
                        <div className='profileMineBottomDetailsContainer'>
                        <span>F.Name</span>
                        <span>Lewis Kipngetich</span>
                        </div>
                        <div className='profileMineBottomDetailsContainer'>
                        <span>L.Name</span>
                        <span>Kemboi</span>
                        </div>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        <span>Job Position</span>
                        <span>Chief Executive Officer</span>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        <span>Work Schedule</span>
                        <span>Remote</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="profileInfo">
                <div className="profileInfoTop">
                    <span>Personal Information</span>
                    <button><RiEdit2Fill />Edit</button>
                </div>
                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>First Name</span>
                        <span>Lewis Kipngetich</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Last Name</span>
                        <span>Kemboi</span>
                    </div>
                </div>



                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Email Address</span>
                        <span>ceo@luwi.ac.ke</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Phone</span>
                        <span>+254722123123</span>
                    </div>
                </div>

                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Gender</span>
                        <span>Male</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Date Of Birth</span>
                        <span>01/01/1967</span>
                    </div>
                </div>
            </div>
            <div className="profileAddress">
                <div className="profileAddressHeader">
                    <span>Address</span>
                    <button><RiEdit2Fill />Edit</button>
                </div>
                <div className="profileAddressMiddle">
                    <div className='profileAddressMiddleContainer'>
                    <span className='profileAddressMiddleHeader'>Country</span>
                    <span>Kenya</span>
                    </div>
                    <div className='profileAddressMiddleContainer'>
                    <span className='profileAddressMiddleHeader'>City</span>
                    <span>Nyeri</span>
                    </div>
                </div>
                <div className="profileAddressBottom">
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Street</span>
                    <span>5th street</span>
                    </div>
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Postal Code</span>
                    <span>5498-43314</span>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;