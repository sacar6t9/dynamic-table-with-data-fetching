import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
const API="https://jsonplaceholder.typicode.com/users";

function App() {
  const [user,setUsers]=useState(['']);
  const fetchUsers=async(url)=>{
    try{
      const res=await fetch(url);
      if(data.length>0){
        setUsers(data);
      }
      const data=await res.json();
      console.log(data);
    }
    catch(e){
      console.error(e);
    }
  }
  useEffect (()=>{
    fetchUsers(API);
  },[])
  return (
    <div>
      <table>
      <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>ADDRESS</th>



      </thead>

      </table>

    </div>
  )
}

export default App
