import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {

  const users = useSelector((state) => state.users)
  console.log(users)

  return (
    <div>
      {users.map((user) => {
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Score:{user.score}</p>
        </div>
      })}
    </div>
  );
};

export default Score;