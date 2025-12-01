import { useState } from "react"
import { Input } from "./ui/input"
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "../assets/main-hero-image.jpg"
import {useNavigate } from "react-router-dom";

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate=useNavigate();
  return (
    <div className="flex flex-col w-full md:flex-row max-w-7xl mx-auto md:p-4 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[50%] border rounded-lg p-10 shadow-slate-300 shadow-lg">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">Order Food anytime & anywhere</h1>
          <p className="text-gray-500">Hey! Our delicious food is waiting for you, we are always near to you.</p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 border-2 h-12 shadow-xl"
          />
          <Search className="absolute inset-y-3 inset-x-3 text-gray-500 " />
          <Button onClick={()=> navigate(`search/${searchText}`)} className="h-12" >Search</Button>
        </div>
      </div>
      <div className="w-full md:w-[50%] ">
        <img
         src={HeroImage}
         alt="HeroImage"
         className="w-full border rounded-lg shadow-slate-300 shadow-lg "
          />
      </div>
    </div>
  )
}

export default HereSection