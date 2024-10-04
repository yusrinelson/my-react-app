import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
const UserProfile = () =>  {
  const {userName} = useParams();
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
      
      const fetchProfile = async () => {
        setProfile({name: userName, bio: "this is a user bio"})
      }
      fetchProfile()
    }, [userName])
	return (
	  <div>
       <h1>User Profile: {profile ? profile.name : "Loading..."}</h1>
       <p>{profile ? profile.bio : ""}</p>
	  </div>
	);
  }
  
  export default UserProfile;
  