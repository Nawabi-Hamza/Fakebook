import React from 'react'
import LeftSide from '../component/LeftSide'
import RightSide from '../component/RightSide'
// import Home from './Home'
import "../App.css"
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
export default function Main() {
  return (
    <div className='Main-Themes'>
        <LeftSide />
          <Outlet />
        <RightSide />
    </div>
  )
}
