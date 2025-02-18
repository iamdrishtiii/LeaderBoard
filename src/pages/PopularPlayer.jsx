import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularPlayer } from '../action';
import Card from '../Component/Card';

const PopularPlayer = () => {
  const popularplayer = useSelector((state) => state.popularplayer);
  // console.log(popularplayer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPlayer())
  }, [])

 
  return (
    <div className='flex flex-wrap pb-32 sm:pb-28 lg:pb-32'>
       {popularplayer.length ? (
    popularplayer.map((pplayer) =><Card pplayer={pplayer} key={pplayer.id}/> )
  ) : (
    <p>No Post Yet!</p>
  )}
    </div>
  )
}

export default PopularPlayer