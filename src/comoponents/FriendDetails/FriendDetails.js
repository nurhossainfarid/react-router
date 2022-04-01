import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    let { friendID } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>My jarga friends details : {friendID}</h1>
            <h1>Name : {friend.name}</h1>
            <p>Contact Number : {friend.phone}</p>
            <p>Email : {friend.email}</p>
            <h3>City : {friend.address?.city}</h3>
            <h3>Geo : {friend.address?.geo.lat}</h3>
        </div>
    );
};

export default FriendDetails;