import React from 'react'
import axios from 'axios'

const Developer_Tools = () => {
    
    async function generate()
    {
     for(var i=1; i<=20; i++)
     {
        await axios.post('http://127.0.0.1:3000/api/v1/user/signup', {
           walletAddress : `0x123456789u${i}`,
           username : `user${i}`,
           password : `user${i}pass`,
           firstName : `User${i}`,
           lastName : `User${i}`,
           profilePicURL : "images/p.png"
        })
         .then(function (response)
          {
           console.log(response);
          })
 
     }
    }

  return (
    <>
        <h1>Developer_Tools</h1>
        <button onClick={generate}>Generate 20 Users</button>
    </>
    
    
  )
}

export default Developer_Tools