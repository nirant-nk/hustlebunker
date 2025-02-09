import axios from "axios";
import { useEffect, useState } from "react";

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/workspaces")
      .then(response => setWorkspaces(response.data))
      .catch(error => console.error("Error fetching workspaces:", error));
  }, []);

  return (
    <div>
      <h1>Available Workspaces</h1>
      {workspaces.length === 0 ? <p>Loading...</p> : (
        workspaces.map(ws => (
          <div key={ws.id}>
            <h3>{ws.name} ({ws.type})</h3>
            <p>Price: {ws.price}/hour</p>
            <button>Book Now</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Workspaces;
