import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./Pages/Auth/Login";
import Admin from "./Pages/Admin/AdminDashboard";
import UserDashBoard from "./Pages/User/UserDashBoard";
import Users from "./Pages/Admin/Users";
import AddEvent from "./Pages/Admin/AddEvent";
import TicketsBought from "./Pages/User/TicketsBought";
import Shows from "./components/Shows";
import Sidebar from "./components/SideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ShowEvent from "./components/Show-Event";
function App() {
  const [booking, setBooking] = useState([]);
  const [shows, setShows] = useState([]);
  const [showPage, setShowPage] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:3000/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);
  const handleBooking = (book) => {
    setBooking((newBooking) => {
      const booked = newBooking.find((ticket) => ticket.id === book.id);
      if (!booked) {
        toast.success("You Have Successfully Booked !!!");
        return [...newBooking, book];
      } else {
        toast.error("You Have already bookedde!!!");
        return newBooking;
      }
    });
  };
  const Unbooking = (unbook) => {
    setBooking(booking.filter((ticket) => ticket.id !== unbook.id));
    toast.success(`${unbook.name}has been unboked successfully`);
  };
  const handleShowClick = (show) => {
    setShowPage(show);
  };
  const returnBack = () => {
    setShowPage(null);
  };
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
                <Route path="users" element={<Users />} />
                <Route path="add-event" element={<AddEvent />} />
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
                  shows={shows}
                  handleShowClick={handleShowClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
