import React, { useRef, useState, type FormEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Loader2, Locate, Mail, MapPin, MapPinHouse, Phone, Plus } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("");

  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });

  const loading = false;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api implimentation
  };

  return (
    <form className="max-w-7xl mx-auto my-5" onSubmit={updateProfileHandler}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative flex justify-center items-center rounded-full md:w-28 md:h-28 w-20 h-20 bg-slate-100">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>

            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              onChange={fileChangeHandler}
              className="hidden"
            />

            <div
              onClick={() => {
                imageRef.current?.click();
              }}
              className="absolute cursor-pointer inset-0 flex items-center justify-center hover:bg-slate-300 hover:rounded-full opacity-0 hover:opacity-100 transition duration-100"
            >
              <Plus className="text-white" />
            </div>
          </Avatar>

          <input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            placeholder="Full name"
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent bg-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-5 md:gap-2 gap-3 my-3">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Phone className="text-gray-500" />
          <div className="w-full">
            <Label>Phone</Label>
            <input
              type="phone"
              name="phone"
              value={profileData.phone}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Locate className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinHouse className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        {loading ? (
          <Button disabled>
            <Loader2 className="animate-spin" /> Please Wait
          </Button>
        ) : (
          <Button type="submit">Update</Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
