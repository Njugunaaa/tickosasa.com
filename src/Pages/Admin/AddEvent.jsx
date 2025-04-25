import React, { useState } from "react"
import { toast } from "react-toastify"

function AddEventForm({ newEvent }) {
  const [eventName, setEventName] = useState("")
  const [posterUrl, setPosterUrl] =useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [venue, setVenue] = useState("")
  const [description, setDescription] = useState("")
  const [regularPrice, setRegularPrice] = useState("")
  const [regularTickets, setRegularTickets] = useState("")
  const [vipPrice, setVipPrice] = useState("")
  const [vipTickets, setVipTickets] = useState("")
  const [vvipPrice, setVvipPrice] = useState("")
  const [vvipTickets, setVvipTickets] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      eventName && posterUrl && date && time && venue && description &&
      regularPrice && regularTickets && vipPrice && vipTickets && vvipPrice &&
      vvipTickets
    ) {

      const Event = {
        name: eventName,
        poster: posterUrl,
        date,
        time,
        venue,
        description,
        country: "Kenya",
        tickets: {
          regular: { price: regularPrice, remaining: regularTickets },
          vip: { price: vipPrice, remaining: vipTickets },
          vvip: { price: vvipPrice, remaining: vvipTickets },
        }
      }
      newEvent(Event)
      toast.success("Event has be added successfully!")
      setEventName("")
    setPosterUrl("")
    setDate("")
    setTime("")
    setVenue("")
    setDescription("")
    setRegularPrice("")
    setRegularTickets("")
    setVipPrice("")
    setVipTickets("")
    setVvipPrice("")
    setVvipTickets("")
    } else {
      toast.error("You have not filled in all the details!!")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-300 p-6 rounded shadow-lg text-white max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="Event PosterUrl"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="Regular Ticket Price"
        value={regularPrice}
        onChange={(e) => setRegularPrice(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="Regular Available Tickets"
        value={regularTickets}
        onChange={(e) => setRegularTickets(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="VIP Ticket Price"
        value={vipPrice}
        onChange={(e) => setVipPrice(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="VIP Available Tickets"
        value={vipTickets}
        onChange={(e) => setVipTickets(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="VVIP Ticket Price"
        value={vvipPrice}
        onChange={(e) => setVvipPrice(e.target.value)}
        className="mb-2 p-2 w-full rounded text-white"
      />
      <input
        type="text"
        placeholder="VVIP Available Tickets"
        value={vvipTickets}
        onChange={(e) => setVvipTickets(e.target.value)}
        className="mb-4 p-2 w-full rounded text-white"
      />

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-white"
      >
        Submit
      </button>
    </form>
  )
}

export default AddEventForm
