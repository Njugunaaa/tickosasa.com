import React from "react";

const ShowEvent = ({handleBooking, returnBack, show}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Make a Booking Now</h1>
      <h1 className="text-xl font-bold p-4">{show.name}</h1>
      <div>
        <button onClick={()=>returnBack()} className="color-black">&#8678;</button>
        <img
          src={show.poster}
          alt={show.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4 flex flex-col space-y-1">
          <p className="text-sm text-gray-600">{show.time}</p>
          <p className="text-sm text-gray-600">Venue: {show.venue}</p>
          <p className="text-sm text-white">{show.description}</p>
          <br />
          <p className="text-sm text-red-800">
            Regular: KES {show.tickets.regular.price} <br /> Tickets Left:
            {show.tickets.regular.remaining}
          </p>
          <p className="text-sm text-blue-200">
            VIP: KES {show.tickets.vip.price} <br /> Tickets Left:
            {show.tickets.vip.remaining}
          </p>
          <p className="text-sm text-yellow-200">
            VVIP: KES {show.tickets.vvip.price} <br /> Tickets Left:
            {show.tickets.vvip.remaining}
          </p>
        </div>
      </div>
      <div>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleBooking(show);
          }}
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input type="text" />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input type="text" />

          <select
            name="Ticket"
            required
            className="border border-gray-300 rounded px-3 py-2 mb-2"
          >
            <option value=""> </option>
            <option value="regular">Regular</option>
            <option value="vip">Vip</option>
            <option value="vvip">Vvip</option>
          </select>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleBooking(show)}
            key={show.id}
          >
            Book Now{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowEvent;
