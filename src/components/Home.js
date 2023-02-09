import React, { useState, useEffect } from 'react'
import Action from './Category/Action';
import Drama from './Category/Drama';
import Horror from './Category/Horror';

import { useGlobalContext } from '../context';

const Home = () => {
   const { movie, isLoading, searchmovie } = useGlobalContext();

   return (
      !isLoading && searchmovie ?
         <div className='home-container'>
            <Action searchdata={searchmovie} />
            <Drama searchdata={searchmovie} />
            <Horror searchdata={searchmovie} />
         </div> :

         !isLoading && movie ?
            <div className='home-container'>
               <Action data={movie} />
               <Drama data={movie} />
               <Horror data={movie} />

            </div> : " "

   )
}

export default Home