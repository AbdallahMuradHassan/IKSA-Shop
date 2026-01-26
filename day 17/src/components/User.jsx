import React from 'react'
import { useEffect, useState } from "react";

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users));
    }, []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/users");
                const data = await res.json();
                setProducts(data.products);
            } catch {
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}> {user.firstName} {user.maidenName} {user.lastName}</li>
            ))}
        </ul>
    )
}

export default User;