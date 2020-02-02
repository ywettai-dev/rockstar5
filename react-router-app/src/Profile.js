import React from 'react';
import { useParams } from 'react-router';

const Profile = props => {
   let { name } = useParams();

   return (
      <div>
         <h1>Profile page</h1>
         <p>Profile page for {name}.</p>
      </div>
   );
}

export default Profile;