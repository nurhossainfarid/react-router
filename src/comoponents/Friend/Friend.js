import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, username,id } = friend;
    let navigate = useNavigate();
    const showFriendsDetails = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showFriendsDetails}>{username}</button>
            <Link to={`/friend/${id}`}>Show Details</Link>
        </div>
    );
};

export default Friend;