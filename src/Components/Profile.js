import React, { useState } from 'react';
import "./ComponentStyles/Profile.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Profile() {

    const user = useSelector(selectUser);
    const [currentPlan, setCurrentPlan] = useState(""); 

    const handleSubscribe = (plan) => {
        setCurrentPlan(plan);
    };

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
                            <h3>Plans (Current Plan: {currentPlan})</h3>
                            <h4>Renewal Date: 01/02/2024</h4>
                            <div className="plan">
                                <h5>Netflix Standard 1080p</h5>
                                <button onClick={() => handleSubscribe("Standard")} className={`plan ${currentPlan !== "Standard" ? 'subscribe' : 'current'}`}>
                                    {currentPlan === "Standard" ? "Current Package" : "Subscribe"}
                                </button>
                            </div>
                            <div className="plan">
                                <h5>Netflix Basic 480p</h5>
                                <button onClick={() => handleSubscribe("Basic")} className={`plan ${currentPlan !== "Basic" ? 'subscribe' : 'current'}`}>
                                    {currentPlan === "Basic" ? "Current Package" : "Subscribe"}
                                </button>
                            </div>
                            <div className="plan">
                                <h5>Netflix Premium 4K-HDR</h5>
                                <button onClick={() => handleSubscribe("Premium")} className={`plan ${currentPlan !== "Premium" ? 'subscribe' : 'current'}`}>
                                    {currentPlan === "Premium" ? "Current Package" : "Subscribe"}
                                </button>
                            </div>
                            <button className="profile_signout"
                                onClick={() => auth.signOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
