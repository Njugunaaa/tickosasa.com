import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
    <div className='row'>
      <div className='sidebar col-3'>
        <Link to="AdminShows">Admin Shows</Link><br />
        <Link to="AddEvent">Add Events</Link>
      </div>
      <div className='main col-8'></div>
      <  Outlet/>
    </div>
    </>
  )
}

export default AdminDashboard