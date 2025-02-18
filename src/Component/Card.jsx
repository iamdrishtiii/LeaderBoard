import React from "react";
const Card = ({ pplayer }) => {
  return (
    <div key={pplayer.id} className='flex flex-wrap m-4 w-fit border-2 shadow-xl p-10 rounded-xl'>
     <img src={pplayer.image} alt="" /> <br />
     Name: {pplayer.firstName}{pplayer.lastName} <br />
     DOB:{pplayer.birthDate} <br />
     Age:{pplayer.age} <br />
     Weight:{pplayer.weight} 
     </div>
  );
};

export default Card;