import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'
const Navbar = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className='flex justify-between p-4 bg-gray-400/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <a href="/">
        Medic
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
