
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Link } from "react-router-dom"
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";


const Navbar = () => {
  const admin = true;
  const loading = false;

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
        <div className="hidden md:flex lg:flex items-center gap-6">
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
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            {
              loading ? (
                <Button disabled ><Loader2 className="animate-spin" /> Please Wait </Button>
              ) : <Button >Logout</Button>
            }
          </div>
        </div>
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}

export default Navbar

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row justify-between mt-12">
          <SheetTitle className="text-xl text-bold ">Food</SheetTitle>
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
        </SheetHeader>
        <div className="border "></div>

        <SheetDescription className="flex-1">
          <Link to="/profile" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <User />
            <span>Profile</span>
          </Link>
          <Link to="/order" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <HandPlatter />
            <span>Order</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <ShoppingCart />
            <span>cart (0)</span>
          </Link>
          <Link to="/menu" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <SquareMenu />
            <span>Menu</span>
          </Link>
          <Link to="/restaurant" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <UtensilsCrossed />
            <span>Restaurant</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 hover:bg-gray-200 px-3 py-2 rounded-lg text-black! font-medium ">
            <PackageCheck />
            <span>Profile</span>
          </Link>
        </SheetDescription>
        <SheetFooter>

          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-bold">full stack</p>
          </div>
          <SheetClose>
            <Button type="submit" className="">
              Logout
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>

        </SheetFooter>
      </SheetContent>


    </Sheet>
  )
}