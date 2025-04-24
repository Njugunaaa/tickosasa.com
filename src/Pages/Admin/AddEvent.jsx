import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const AddEvent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
      
  };
  return (
    <div>
      <div className="bg-black h-screen shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}className="flex max-w-md flex-col gap-4">
          <h2 className="text-xl font-bold mb-2">Add Expense</h2>
          <h4 className="text-gray-600 mb-4">Enter Event Name</h4>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Event Name"

            />
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

              placeholder="Enter Event date"
            />
          </div>
          <div>
            <input
              type="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

              placeholder="Enter Event time"
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Event Venue"

            />
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Event description"
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter regular ticket price "
            />
            <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter regular available tickets "
          />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Vip ticket price "
            />
            <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Vip available tickets "
          />
          </div>
           <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Vvip ticket price "
            />
            <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Vvip available tickets "
          />
          </div> 
          

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          ><Link to="UserDashBoard" className='text-white'>Submit</Link>
          </button>
        </form>
        <  Outlet/>
        </div>
    </div>
  )
}

export default AddEvent