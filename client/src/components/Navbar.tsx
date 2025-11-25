
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Link } from "react-router-dom"
import { Button } from "./ui/button";
import { Loader2,Moon, ShoppingCart, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const Navbar = () => {
  const admin = true;
  const loading=false;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14 ">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">Food</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>
          </div>
          {
            admin && (
              <div>
                <Menubar>
                  <MenubarMenu >
                    <MenubarTrigger>
                      Dashboard
                    </MenubarTrigger>
                    <MenubarContent>
                      <Link to="/admin/restaurant">
                        <MenubarItem>
                          Retaurant
                        </MenubarItem>
                      </Link>
                      <Link to="/admin/menu">
                        <MenubarItem>
                          Menu
                        </MenubarItem>
                      </Link>
                      <Link to="/admin/orders">
                        <MenubarItem>
                          Orders
                        </MenubarItem>
                      </Link>

                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            )}
        </div>
        <div className="flex items-center gap-6">
          <div>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/cart" className="relative cursor-pointer text-black!">
            <ShoppingCart />

            <Button
              size={"icon"}
              className="absolute -top-3.5 -right-5 text-xs h-4 w-4 bg-red-500! rounded-full"
            >
              5
            </Button>
          </Link>

          <div>
            <Avatar>
              <AvatarImage/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            {
              loading?(
                <Button disabled className="w-30" ><Loader2 className="animate-spin"/> Please Wait </Button>
              ):<Button className="w-30" >Logout</Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar