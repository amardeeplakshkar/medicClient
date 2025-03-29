import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu"
import {Button} from './ui/button'
const Navbar = () => {
  const [user] = useState(false)
  return (
    <div className='flex justify-between p-4 bg-gray-400/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <a href="/">
        Medic
      </a>
     {!user ? 
     <>
     <Button>
      Sign In
     </Button>
     <Button>
      Sign Up
     </Button>
     </>
     :
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>}
    </div>
  )
}

export default Navbar
