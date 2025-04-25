import React from "react";

const TicketsBought = ({ booking, handleUnbooking }) => {
  return (
    <div>
      <h2 className="text-xl font-bold p-4">My Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-8 w-full">
        {booking.map((show) => (
          <div
            key={show.id}
            className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={show.poster}
              alt={show.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 flex flex-col space-y-1">
              <p className="text-lg font-semibold">{show.name}</p>
              <p className="text-sm text-gray-600">{show.time}</p>
              <p className="text-sm text-gray-600">Venue: {show.venue}</p>
              {/* working progress cause cant display the ticket type bought but to be continued */}
              <p className="text-sm text-gray-600">{show.ticket}</p>

              <button onClick={() => handleUnbooking(show)}>Unbook Now </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsBought;
