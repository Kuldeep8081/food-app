//tsrafce
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { userLoginSchema, type LoginInputState } from "@/schema/userSchema";
import {Loader2, LockKeyhole, Mail} from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  
  const [input, setInput]=useState<LoginInputState>({
    email:"",
    password:"",
  })

  const [errors,setErrors]=useState<Partial<LoginInputState>>({});

  const changeEventHadler=(e:ChangeEvent<HTMLInputElement>)=>{
     const {name, value}=e.target;
     setInput({...input,[name]:value});
  }

  const loginSubmitHandler=(e:FormEvent)=>{
      e.preventDefault();
      const result=userLoginSchema.safeParse(input);
      if(!result.success){
         const { fieldErrors} = result.error.flatten();
         setErrors(fieldErrors as Partial<LoginInputState>);
         return ;
      }
      console.log(input);
  }

  const loading=false;
  return (
    <div className="flex items-center justify-center min-h-screen px-20 border rounded-lg" >
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border border-gray-50 mx-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Food</h1>
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
          {
            errors&&<span className="text-sm text-red-500">{errors.email}</span>
          }
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
          {
            errors&&<span className="text-sm text-red-500">{errors.password}</span>
          }
        </div>

        <div className="pb-4 flex flex-col">
          {
          loading?(<Button disabled className="w-full hover:border-b-black-800" ><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</Button>)
          :<Button type="submit"  className="w-full hover:border-b-black-800" >Login</Button>
        }
         
         <div className="mt-4">
            <Link  to="/forgot-password">Forgot Password?</Link>
         </div>
        </div>

        <div
        className="text-blue-500 mt-4 mb-2 border-2 border-t-muted border-l-muted border-r-muted" 
        ></div>
        
        <p className="mb-4">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-blue-500">Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default Login