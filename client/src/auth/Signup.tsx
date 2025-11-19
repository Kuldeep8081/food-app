//tsrafce
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Loader2, LockKeyhole, Mail, Phone, User} from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface SignupInputState{
  email:string;
  password:string;
  fullName:string;
  contact:string;
}
const Signup = () => {
  
  const [input, setInput]=useState<SignupInputState>({
    email:"",
    password:"",
    fullName:"",
    contact:"",
  })

  const changeEventHadler=(e:ChangeEvent<HTMLInputElement>)=>{
     const {name, value}=e.target;
     setInput({...input,[name]:value});
  }

  const signupSubmitHandler=(e:FormEvent)=>{
      e.preventDefault();
      console.log(input);
  }

  const loading=false;
  return (
    <div className="flex items-center justify-center min-h-screen px-20 border rounded-lg" >
      <form onSubmit={signupSubmitHandler} className="md:p-8 w-full max-w-md md:border border border-gray-50 mx-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Food</h1>
          <h4>Welcome in Signup Page</h4>
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Full Name</label>
          <Input
            type="text"
            placeholder="Full Name"
            className="pl-10 focus-visible:ring-1"
            name="fullName"
            value={input.fullName}
            onChange={changeEventHadler}
          />
          <User className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Contact</label>
          <Input
            type="text"
            placeholder="Contact"
            className="pl-10 focus-visible:ring-1"
            name="contact"
            value={input.contact}
            onChange={changeEventHadler}
          />
          <Phone className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Email</label>
          <Input
            type="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"
            name="email"
            value={input.email}
            onChange={changeEventHadler}
          />
          <Mail className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            className="pl-10 focus-visible:ring-1"
            name="password"
            value={input.password}
            onChange={changeEventHadler}
          />
          <LockKeyhole className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="pb-4">
          {
          loading?(<Button disabled className="w-full hover:border-b-black-800" ><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</Button>)
          :<Button type="submit"  className="w-full hover:border-b-black-800" >Signup</Button>
        }
        </div>

        <div
        className="mt-4 mb-2 border-2 border-t-muted border-l-muted border-r-muted" 
        ></div>
        
        <p className="mb-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup