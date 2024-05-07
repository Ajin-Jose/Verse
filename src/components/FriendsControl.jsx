import React from 'react';
import FriendsCard from '../components/FriendsCard';

const FriendsControl = ({friends}) => {
  return (
    <div className='m-5'>
        <FriendsCard friends={friends} />  
    </div>
  )
}

export default FriendsControl