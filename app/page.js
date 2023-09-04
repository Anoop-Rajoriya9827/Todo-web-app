'use client'
import React from 'react'
import Header from '@/Components/Header'
import Main from '@/Components/Main'
import Footer from '@/Components/Footer'

export const page = () => {
  return (
   <div className='page'>
    <Header/>
    <Main/>
    <Footer/>
   </div>
  )
}

export default page