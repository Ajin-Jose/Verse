import React, { useEffect, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { AddressAtom } from '../store/AddressAtom';
import { CurrentUserAtom } from '../store/CurrentUserAtom';
import Navbar from "../scenes/navbar/Navbar";
import axios from 'axios';
import UserWidget from '../components/UserWidget';
import Feed from '../components/Feed';
import Sponsored from '../components/Sponsored';
import FriendsControl from '../components/FriendsControl';
import FloatingActionButtons from '../components/AddButton';


const Dashboard = () => {
  const address = useRecoilValue(AddressAtom);

  console.log(address);

  const [currentUser,setCurrentUser] = useRecoilState(CurrentUserAtom);
  
  
  useEffect(() => {
    async function getUser()
     {
        const response = await axios.post('http://127.0.0.1:3000/api/v1/dashboard', {
        walletAddress : address,
      });
      setCurrentUser(response.data.User)
     }
     getUser();
    }, [address] 
  )


  return (
    <div className='w-full h-screen bg-zinc-950'>
      <div>
        <Navbar/>
      </div>
      <div className='grid grid-cols-11'>
          <div className=' col-span-3' >
              <UserWidget />
          </div>
          <div className=' col-span-5'>
              <Feed/>
          </div>
          <div className='bg col-span-3' >
              <Sponsored/>
              <FriendsControl friends={currentUser.friends}/>
          </div>
      </div>

      <div className='fixed bottom-10 right-10'>
          <FloatingActionButtons/>
      </div>

    </div>


  )
}
export default Dashboard