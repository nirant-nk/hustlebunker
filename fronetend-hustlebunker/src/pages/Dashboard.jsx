import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/bookings")
      .then(response => setBookings(response.data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <div>
      <h1>Your Dashboard</h1>
      {bookings.length === 0 ? <p>No bookings yet.</p> : (
        bookings.map(booking => (
          <div key={booking.id}>
            <h3>{booking.workspace}</h3>
            <p>{booking.date} - {booking.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
