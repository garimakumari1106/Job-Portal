import React from 'react'
import { Rating } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { testimonials } from '../Data/Data';

const Comments = (props:any) => {
  const  datas=testimonials;
  return (

   <div>
     <div className='flex justify-center  text-white     text-5xl font-semibold mt-20 mb-10'>What
      <span className='text-mine-shaft-bright-sun-500 '> Users  </span>  Say about Us? </div>
   <div className='flex '>{datas.map((data:any,index:any)=><div key={index} className=' mx-6 px-6 border-2 rounded-xl  w-[23%]  p-4 border-mine-shaft-bright-sun-500'>
        <div className='flex gap-4  items-center'>
            <div><Avatar className='!h-20 !w-20' src="{data.avatars}" alt="it's me" />
</div>
            <div>
                <div className='text-xl font-semibold text-mine-shaft-bright-sun-100'>{data.name}</div>
                <div><Rating value={data.rating} fractions={3} readOnly size="lg" /></div>
            </div>
        </div>
        <div className='text-mine-shaft-bright-sun-100 p-4 text-lg '>{data.testimonial}</div>
    </div> )}</div> 
  
</div>)}

export default Comments