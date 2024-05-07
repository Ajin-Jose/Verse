import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { AddressAtom } from '../store/AddressAtom';
import {SignupFormDemo } from '../components/SignupForm'
const Signup = () => {
  const address = useRecoilValue(AddressAtom);
  return (
    <div className='w-screen grid grid-cols-5 bg-neutral-900  '>
      <div className='flex justify-center col-span-2 flex-col text-center font-bold font-mono text-xl'>
          <h1>Sign</h1>
          <h1>Up</h1>
      </div>
      <div className="dark p-10 pr-0 col-span-3 flex">
        <SignupFormDemo/>
      </div>
    </div>
  )
}

export default Signup