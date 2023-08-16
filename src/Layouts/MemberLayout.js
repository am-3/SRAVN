import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/MemberLayout.css'
export default function MemberLayout() {
  return (
    <div className='member-layout'>
        <div className="member-cont">
          <h2>Members</h2>
          <div className="subnav">
              <ul>
                  <NavLink className={({ isActive }) => isActive ? 'active' : null}><li>Add</li></NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'active' : null}><li>Edit</li></NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'active' : null}><li>Delete</li></NavLink>
              </ul>
          </div>
        </div>
        <Outlet/>
    </div>
  )
}
