import React from "react";
import './index.css'
import { useState } from "react";
import { useEffect } from "react";
import UserData from "./components/UserData";
const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([""]);
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>

          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          <UserData  users={users} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
