import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='nav'>
        <div className='logo'>MY Todo</div>
        <div className='link'>
        <Link href="">Set Task</Link>
        <Link href="">Task List</Link>
        </div>
    </div>
    </>
  )
}

export default Header