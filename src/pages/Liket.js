import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Card from './Card';

const Liket = () => {

   const liked = useSelector(steta=>steta.liked)
   const dispatch=useDispatch()
  return (
    <div className='liked'>
      {liked.map((el) => (
        <Card product={el} key={el.id} />
      ))}
    </div>
  );

};


 
  
  
 


export default Liket;