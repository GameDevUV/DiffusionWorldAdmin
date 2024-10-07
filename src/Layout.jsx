import React from 'react'
import './App.css'
import { Header , Footer } from './components'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout