import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularPlayer } from '../action';

const PopularPlayer = () => {
  const popularplayer = useSelector((state) => state.popularplayer);
  console.log(popularplayer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPlayer())
  }, [])


  // const popularplayerList = popularplayer.length ? (
  //   popularplayer.map((pplayer) => {
  //     return <p>{pplayer.name}</p>;
  //   })
  // ) : (
  //   <p>No Post Yet!</p>
  // );
  return (
    <div>
      {/* {popularplayerList} */}
      {popularplayer}

    </div>
  )
}

export default PopularPlayer