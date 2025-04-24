import React from "react";

const Shows = ({ shows, handleShowClick }) => {
  return (
    <>
      <h2 className="text-2xl font-bold p-4">Tickets On Sale</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-8 w-full">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col"
            onClick={() => handleShowClick(show)}
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
        ))}
      </div>
    </>
  );
};

export default Shows;
