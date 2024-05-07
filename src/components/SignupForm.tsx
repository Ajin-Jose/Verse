import React, { useState } from "react";
import { useRecoilValue } from 'recoil';
import { AddressAtom } from '../store/AddressAtom';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useDropzone } from 'react-dropzone';

export function SignupFormDemo() {
  const navigate = useNavigate();
  const address = useRecoilValue(AddressAtom);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    profilePicURL: ''
  });

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/user/signup', {
        ...formData,
        walletAddress: address,
      });

      console.log(response.data); // Assuming response contains data you want to log
    } catch (error) {
      console.error('Error:', error);
    }

    console.log("Form submitted");
    navigate("/dashboard");
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Implement your upload logic here
      // You can use libraries like Axios to upload the file to your server
      const formData = new FormData();
      formData.append('profilePic', file);
      console.log("File selected:", file);
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Welcome to Verse
      </h2>
      <p className="text-neutral-600 text-sm  mt-2 dark:text-neutral-300 text-center">
        Signup and join the transparent Social Layer.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-9">
          <div className="flex flex-col justify-center col-span-4">
            <div className="flex flex-col space-y-4">
            <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                  >
                    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      GitHub
                    </span>
                    <BottomGradient />
                  </button>
                  <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                  >
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Google
                    </span>
                    <BottomGradient />
                  </button>
            </div>
          </div>
          <div className="flex col-span-1 justify-center">
            <div className="bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[full] w-[3px] "/>
          </div>
          <div className=" col-span-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="John"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Doe"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="username"
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="profilePicURL">Profile Picture</Label>
              <Input
                id="profilePicURL"
                placeholder="URL"
                type="file"
                accept="image/*"
                name="profilePicURL"
                value={formData.profilePicURL}
                
                onClick={handleUploadClick}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="walletaddress">Wallet Address</Label>
              <Input
                disabled
                id="walletaddress"
                placeholder={address}
                type="walletaddress"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
