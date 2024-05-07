import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Connect from '../components/Connect';
import { useRecoilState } from 'recoil';
import { AddressAtom } from '../store/AddressAtom';
import { GoogleGeminiEffectDemo } from '../components/GoogleGeminiEffectDemo';

const Landing = () => {
    const [address,setAddress] = useRecoilState(AddressAtom);
    const navigate = useNavigate();
    async function ConnectTest()
     {
        
        const walletAddress = document.querySelector('#walletAddressInput').value.trim();
        if (!walletAddress) {
            alert('Please enter your public key.');
            return; // Exit the function early if no address is provided
          }
        
          try 
           {
                const response = await axios.post('http://127.0.0.1:3000/api/v1/user/connect', {
                    walletAddress : walletAddress,
                })
                if (response.status !== 200) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                setAddress(walletAddress);
                const data = response.data;
                if (data.auth) {
                    // Redirect to dashboard
                    navigate("/dashboard"); // Adjust URL as needed
                  } else {
                    // Redirect to signup page
                    navigate("/signup"); // Adjust URL as needed
                  }

           }
          catch(e)
           {
            console.error('Error connecting wallet:', e);
            alert('An error occurred. Please try again.'); 
           }
     }

  return (
    
    
        <div>
            <div className='mt-0'>
                <GoogleGeminiEffectDemo/>

            </div>
            <div className='text-center'>
                For Testing Purposes only

                <input
                    id="walletAddressInput" 
                    type='text' 
                    placeholder='public key'
                    className='ml-4 p-1 pl-3 rounded-xl'
                >
                </input>
                <button className='ml-4 rounded-xl' onClick={ConnectTest} >
                    Submit
                </button>
            </div>
        </div>
  )
}

export default Landing
