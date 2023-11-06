import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function AxiosFetch() {
    const [users, setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = () => {
        axios.get(url)
        .then((res)=>setUsers(res.data))
        .then((err)=>console.log(err))
    }
    useEffect (
        ()=>{fetchData();},[]
    )
    return (
        <div>
            <ul>
                {users && users.map((users, index)=>(<li key={index}>{users.name}</li>))}
            </ul>
        </div>
    )
}
