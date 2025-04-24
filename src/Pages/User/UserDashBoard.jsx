import React from 'react'
import { Outlet, Link } from "react-router-dom";
const UserDashBoard = () => {
  return (
    <div>
      <div>
        <Link to="tickets-bought">Tickets Bought</Link>
        
      </div>
      <div></div>
      <Outlet />
    </div>
  )
}

export default UserDashBoard