"use client"

import React, { ReactNode } from 'react'
import { useAppSelector } from '../lib/hook'
import DashboardNavbar from '../layouts/DashboardNavbar';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

interface LayoutWrapperProps{
    children : ReactNode
}



export default function LayoutWrapper({children} : LayoutWrapperProps) {
    const { isLoggedIn } = useAppSelector((state)=> state.auth);
  return (
    <>
     {isLoggedIn ? <DashboardNavbar /> : <Navbar />}
     {children}
     <Footer />
    </>
  )
}
