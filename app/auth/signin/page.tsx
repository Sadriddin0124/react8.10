import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "@/app/ui/Auth/signIn/signIn.scss"
import { signIn } from '@/api-service/auth.service';
import { AuthPromise } from '@/app/types/auth.types';
import { redirect } from 'next/navigation';
const SignIn = () => {

  const handleSubmit =  async(formData: FormData) => {
    "use server"
    const username = formData.get("username")
    const password = formData.get("password")
    console.log(username, "username");
    console.log(password, "password");
    const response: AuthPromise | undefined = await signIn({username, password})
    if(response?.tokens){
      redirect("/dashboard")
    }    
  }
  return (
    <div className="auth__container">
      <div className="auth">
        <form action={handleSubmit} className="auth__form" id="auth">
          <div className="auth__email">
            <FaUser className="auth__input-icon" />
            <input
              type="text"
              placeholder="Username"
              className="email"
              name='username'
            />
          </div>
          <div className="auth_password">
            <FaLock className="auth__input-icon" />
            <input
              className=" passwords"
              placeholder="Password"
              name='password'
            />
          </div>
          <button form="auth" className="auth__btn bg-white" type="submit">
            SIGN IN NOW
            <IoIosArrowForward size={24}/>
          </button>
        </form>
        <div className="auth__square"></div>
      </div>
    </div>
  )
}

export default SignIn
