import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div className="bg-black h-screen shadow-md rounded-lg p-6">
        <form  className="flex max-w-md flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">TickoSasa.com</h2>
          <h2 className="text-xl font-semibold mb-2">Log In Today</h2>

          <h4 className="text-white mb-4">Enter your Details</h4>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Name"

            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter E-mail"
            />
          </div>
          <div>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

              placeholder="Enter password"
            />
          </div>
          <div>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Confirm password"

            />
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <Link to="UserDashBoard" className='text-white'>Log In</Link>
            
          </button>
        </form>
        <  Outlet/>
      </div>
    </div>
  )
}

export default Login