import { useEffect, useState } from "react";

function App() {

  // users store karne ke liye state
  const [users, setUsers] = useState([]);

  // page load pe API call
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/index")
      .then(res => res.json())
      .then(data => {
        setUsers(data); // data save
      });
  }, []);

  return (
    <div>

      <h2>Users List</h2>

      {/* users show */}
      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}

    </div>
  );
}

export default App;