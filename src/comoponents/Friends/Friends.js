import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setFriends(data)
            })
    }, [])
    return (
        <div>
            <h1>My Friends</h1>
            <p>vai kicu tk darde please khub emergency</p>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;