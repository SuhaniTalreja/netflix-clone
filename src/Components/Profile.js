import React from 'react'
import "./ComponentStyles/Profile.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Profile() {

    const user=useSelector(selectUser);

  return (
    <div className='profile'>
        <Nav />
        <div className="profile_body">
            <h1>Edit Profile</h1>
            <div className="profile_info">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar" 
                />
                <div className="profile_details">
                    <h2>{user.email}</h2>
                    <div className="profile_plans">
                        <h3>Plans (Current Plan : Premiuim)</h3>
                        <h4>Renewal Date : 01/02/2024</h4>
                        <div className="plan">
                            <h5>Netflix Standard 1080p</h5>
                            <button className='subscribe'>Subscribe</button>
                        </div>
                        <div className="plan">
                            <h5>Netflix Basic 480p</h5>
                            <button className='subscribe'>Subscribe</button>
                        </div>
                        <div className="plan">
                            <h5>Netflix Premium 4K-HDR</h5>
                            <button className='current'>Current Package</button>
                        </div>
                        <button className="profile_signout"
                        onClick={()=> auth.signOut()}>
                            Sign Out 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile