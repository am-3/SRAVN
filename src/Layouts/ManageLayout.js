import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MdSpaceDashboard,MdPeopleAlt,MdSettings } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import '../styles/ManageLayout.css'
export default function DashboardLayout() {
  return (
    <div className='dash-layout'>
        <div className="sidebar-menu">
            <ul>
                <li><NavLink to='' end="true" className={({ isActive }) => isActive ? 'activate' : null}><MdSpaceDashboard size={25}/>Dashboard</NavLink></li>
                <li><NavLink to='members' className={({ isActive }) => isActive ? 'activate' : null}><MdPeopleAlt size={25}/>Members</NavLink></li>
                <li><NavLink to='inventory' className={({ isActive }) => isActive ? 'activate' : null}><ImBooks size={25}/>Inventory</NavLink></li>
                <li><NavLink to='settings' className={({ isActive }) => isActive ? 'activate' : null}><MdSettings size={25}/>Settings</NavLink></li>
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}
