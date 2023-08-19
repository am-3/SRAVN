import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MdSpaceDashboard,MdPeopleAlt,MdSettings } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import '../styles/ManageLayout.css'
export default function DashboardLayout() {
  return (
    <div className='dash-layout'>
        <div className="background2"></div>
        <div className="sidebar-menu">
            <ul>
                <li><NavLink to='' end="true" className={({ isActive }) => isActive ? 'activate' : null}><MdSpaceDashboard size={25}/>DASHBOARD</NavLink></li>
                <li><NavLink to='members' className={({ isActive }) => isActive ? 'activate' : null}><MdPeopleAlt size={25}/>MEMBERS</NavLink></li>
                <li><NavLink to='inventory' className={({ isActive }) => isActive ? 'activate' : null}><ImBooks size={25}/>INVENTORY</NavLink></li>
                <li><NavLink to='settings' className={({ isActive }) => isActive ? 'activate' : null}><MdSettings size={25}/>SETTINGS</NavLink></li>
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}
