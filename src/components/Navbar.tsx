import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import { AppName } from '../../data/constants'
const Navbar = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className='flex justify-between p-4 w-full py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b'>
      <a href="/" className='flex justify-center items-center gap-2'>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">M</span>
        </div>
        <span className="font-bold text-xl ">{AppName}</span>
      </a>
      {!user ?
        <div className='flex justify-center items-center gap-2'>
          <NavLink to='/login'>
            <Button>
              Sign In
            </Button>
          </NavLink>
          <NavLink to='/sign-up'>
            <Button>
              Sign Up
            </Button>
          </NavLink>
        </div>
        :
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>}
    </div>
  )
}

export default Navbar
