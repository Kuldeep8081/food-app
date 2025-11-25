import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const loading=false;
    const [email,setEmail]=useState<string>("");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
            <div className="text-center">
                <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
                <p className="text-sm text-gray-600">Enter your email address to rset your password</p>
            </div>
            <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Email</label>
          <Input
            type="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Mail className="absolute inset-y-9.5 inset-x-2" />
        </div>
        <div className="pb-4">
          {
          loading?(<Button disabled className="w-full hover:border-b-black-800" ><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</Button>)
          :<Button type="submit"  className="w-full hover:border-b-black-800" >Sent Reset link</Button>
        }
        </div>
        <span>Back to <Link className="text-blue-500 hover:underline"  to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default ForgotPassword