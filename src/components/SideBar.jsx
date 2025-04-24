import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-6 fixed">
      <h2 className="text-2xl font-bold"> Tickosasa.com</h2>
      <h1 className="text-lg  text-green-400"><em>Your Ticket to Every Moment.</em></h1><br />

      <div className="flex flex-col space-y-4">
        <Link
          to="/admin"
       >
          Admin Dashboard
        </Link><br />
        <Link
          to="/user"
       >
          User Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
