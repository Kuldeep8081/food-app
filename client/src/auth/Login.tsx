//tsrafce
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator";
import {Loader2, LockKeyhole, Mail } from "lucide-react"

const Login = () => {
  const loading=false;
  return (
    <div className="flex items-center justify-center md-h-screen bg-gray-50 px-20 border rounded-lg" >
      <form action="" className="md:p-8 w-full max-w-md md:border border border-gray-50 mx-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Food</h1>
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Email</label>
          <Input
            type="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"

          />
          <Mail className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="relative flex flex-col items-start gap-2 mb-4">
          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            className="pl-10 focus-visible:ring-1"

          />
          <LockKeyhole className="absolute inset-y-9.5 inset-x-2" />
        </div>

        <div className="pb-4">
          {
          loading?(<Button className="w-full hover:border-b-black-800" ><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</Button>)
          :<Button  className="w-full hover:border-b-black-800" >Submit</Button>
        }
        </div>

        <Separator className="my-4 text-amber-400 h-4" />
        
        <p>
        </p>
      </form>
    </div>
  )
}

export default Login