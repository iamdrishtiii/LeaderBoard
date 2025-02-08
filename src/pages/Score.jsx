import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteScore } from '../action';


const Score = () => {
  const [searchTerm,setSearchTerm]=useState('')

  const users = useSelector((state) => state.users)
  // console.log(users)

  const dispatch=useDispatch();

  const handleDelete=(id)=>{
dispatch(deleteScore(id))
  }

  return (
<div className='p-6'>
  <label htmlFor="">Search : </label>
  <input placeholder='Search here...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

    <div className='m-4'>
      {users.filter((user)=>user.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => {
        return <div key={user.userId} className='flex flex-wrap gap-6 border-2 my-6 mx-4 border-gray-200 w-fit p-6 shadow-2xl rounded-xl hover:bg-blue-900 hover:text-white'>
          <div>Name : {user.name} <br />
          Score : {user.score}</div>
          <div className='text-right'><button onClick={()=>handleDelete(user.userId)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button></div>
        </div>

      })}
    </div>

    </div>
  );
};

export default Score;