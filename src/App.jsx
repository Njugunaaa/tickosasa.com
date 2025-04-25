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
function App() {
  const [booking, setBooking] = useState([])
  const [shows, setShows] = useState([])
  const [showPage, setShowPage] = useState(null)
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" })
  const [searchTerm, setSearchTErm] = useState('')

  const jsonBinUrl = "https://api.jsonbin.io/v3/b/680b37678960c979a58cba14"
  const jsonBinMasterKey = "$2a$10$xSp4u1Y3iLb5bmRCQyG4WOtKRJELsKS3BAzd7O72PJcpOhtlNVrji"

  useEffect(() => {
    fetch(jsonBinUrl, {
      headers: {
        "X-Master-Key": jsonBinMasterKey
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from JSONBin:", data);
        if (data && data.record) {
          setShows(data.record.shows)
        }
      })
      .catch(() => toast.error("Failed to load shows from JSONBin"))
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

  const filteredShows = Array.isArray(shows)
  ? shows.filter((show) => {
      return show.name?.toLowerCase().includes(searchTerm.toLowerCase());
    })
  : [];


  const returnBack = () => {
    setShowPage(null)
  }

  const killEvent = (xshow) => {
    const updated = shows.filter((show) => show.id !== xshow.id)

    fetch(jsonBinUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": jsonBinMasterKey
      },
      body: JSON.stringify(updated)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete")
        return res.json()
      })
      .then(() => {
        setShows(updated)
        toast.success(`${xshow.name} has been deleted successfully`)
      })
      .catch(() => toast.error("Deletion was unsuccessful"))
  }

  const newEvent = (eventData) => {
    const updated = [...shows, eventData]

    fetch(jsonBinUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": jsonBinMasterKey
      },
      body: JSON.stringify(updated)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update")
        return res.json()
      })
      .then(() => {
        setShows(updated)
        toast.success("Event added successfully!")
      })
      .catch(() => {
        toast.error("There was an error adding the event.")
      })
  }

  const sortBy = (key) => {
    let direction = "asc"
  
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
  
    const sortedData = [...shows].sort((a, b) => {
      const aVal = a[key]?.toLowerCase?.() || ""
      const bVal = b[key]?.toLowerCase?.() || ""
  
      const comparison = aVal.localeCompare(bVal)
      return direction === "asc" ? comparison : -comparison
    })
  
    setSortConfig({ key, direction })
    setShows(sortedData)
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

export default App
