import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Login from "./Pages/Auth/Login";
import Admin from "./Pages/Admin/AdminDashboard";
import UserDashBoard from "./Pages/User/UserDashBoard";
import AdminShows from "./Pages/Admin/AdminShows";
import AddEvent from "./Pages/Admin/AddEvent";
import TicketsBought from "./Pages/User/TicketsBought";
import Shows from "./components/Shows";
import Sidebar from "./components/SideBar";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import ShowEvent from "./components/Show-Event";
function Api() {
  const [booking, setBooking] = useState([])
  const [shows, setShows] = useState([])
  const [showPage, setShowPage] = useState(null)
  const [ascending, setAscending] =useState(true)
  const [searchTerm,setSearchTErm]=useState('')
  // still under improvements both on authentication and rerouting but will be revisited often

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shows.json?key=d252a320")
      .then((res) => res.json())
      .then((data) => {
        setShows(data)
      })
  }, [])
  const handleBooking = (book) => {
    setBooking((newBooking) => {
      const booked = newBooking.find((ticket) => ticket.id === book.id)
      if (!booked) {
        toast.success(`You Have Successfully Booked ${book.name}!!!`)
        return [...newBooking, book]
      } else {
        toast.error("You Have already bookedd!!!")
        return newBooking
      }
    })
  }
  const Unbooking = (unbook) => {
    setBooking(booking.filter((ticket) => ticket.id !== unbook.id))
    toast.success(`${unbook.name} has been unboked successfully`)
  }
  const handleShowClick = (show) => {
    setShowPage(show)
  }
  const filteredShows=shows.filter((show)=>{
    return show.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  const returnBack = () => {
    setShowPage(null)
  }
  const killEvent = (xshow) => {
    fetch(`hhttps://my.api.mockaroo.com/shows.json?key=d252a320/${xshow.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedShows = shows.filter((show) => show.id !== xshow.id)
        setShows(updatedShows)
        toast.success(`${xshow.name} has been DEleted successfully `)
      } else {
        toast.error("Deletion was unsuccessful")
      }
    })
  }
  const newEvent = (eventData) => {
    fetch("https://my.api.mockaroo.com/shows.json?key=d252a320", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => {
        if (!res.ok){toast.error("Failed to post event")
        return res.json()}
      })
      .then((newEvent) => {
        setShows((prev) => [...prev, newEvent])
        toast.success("Event added successfully!")
      })
      .catch(() => {
        toast.error("There was an error adding the event.")
      })
  }
  
  const sortBy = (key) => {
    const sortedData = [...shows].sort((a, b) => {
     const answer= a[key].toLowerCase().localeCompare(b[key].toLowerCase())
     return ascending ?answer:-answer
    })
    setShows(sortedData)
    setAscending(!ascending)
  }
  return (
    <> 
      <ToastContainer />
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-100 shadow-md">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <NavBar />
          <div className="p-4">
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/admin" element={<Admin />}>
                <Route path="AdminShows" element={<AdminShows shows={shows} killEvent={killEvent} />} />
                <Route path="AddEvent" element={<AddEvent newEvent={newEvent} />} />
              </Route>
              <Route path="/user" element={<UserDashBoard />}>
                <Route
                  path="tickets-bought"
                  element={
                    <TicketsBought
                      booking={booking}
                      handleUnbooking={Unbooking}
                    />
                  }
                />
              </Route>
            </Routes>
            <div>
              {showPage ? (
                <ShowEvent
                  show={showPage}
                  handleBooking={handleBooking}
                  returnBack={returnBack}
                />
              ) : (
                
                <Shows
                  handleShowClick={handleShowClick}
                  searchTerm={searchTerm}
                  setSearchTErm={setSearchTErm}
                  handleSort={sortBy}
                  filteredShows={filteredShows}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Api
