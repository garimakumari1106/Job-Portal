import React from 'react'
import { IconAlignBoxLeftTop } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import {  work } from '../Data/Data';

const Working = () => {
    
    const datas=work;
  return (
    <div className='mt-32'>
        <div className='flex justify-center  text-white     text-5xl font-semibold'>Browse
      <span className='text-mine-shaft-bright-sun-500 '>How it  </span>  Works </div>
      <div className='mx-auto flex justify-center text-xl text-center m-3  text-yellow-100'>Effortlessly navigate through the process and land your dream job.
      </div>
      <div className='gap-44 flex justify-center '>
        <div className='relative'>
            <img className='w-30 h-30  ' src="good.png" alt="" />
            <div className='top-[40%] absolute right-0 flex-col items-center border-2 border-mine-shaft-bright-sun-500 rounded-xl p-4 h-max w-60 backdrop-blur-sm  '> 
                
                    <Avatar src="avatar.png" alt="it's me"/>
              <div className='text-white font-medium text-lg'>Complete your profile</div>
              <div className='text-white '>70% Completed</div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-14 justify-center  '>
           
            {work.map((data:any,index:any)=> <div className='flex justify-around items-center gap-5'>
                <div className='bg-mine-shaft-bright-sun-500 border-mine-shaft-bright-sun-400 rounded-full border-8 '><IconAlignBoxLeftTop stroke={2} height="40" width="40" /></div>
                <div>
                    <div className='text-white text-2xl font-semibold'>{data.work}</div>
                    <div className='text-white text-xl'>{data.desc}</div>
                </div>
            </div>)}
            
        </div>
      </div>
      </div>
  )
}

export default Working 