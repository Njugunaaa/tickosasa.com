import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
    <div className='row'>
      <div className='sidebar col-3'>
        <Link to="users">Users</Link><br />
        <Link to="add-events">Add Events</Link>
      </div>
      <div className='main col-8'></div>
      <  Outlet/>
    </div>
    </>
  )
}

export default AdminDashboard