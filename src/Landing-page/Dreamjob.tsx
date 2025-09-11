import React from 'react'
import { TextInput } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { IconZoom } from '@tabler/icons-react';

const Dreamjob = () => {
  return (
    <div className=' flex align items-center  py-20 px-20 gap-40 '>
        
        <div className='  flex-col justify-center  w-[42%] leading-tight'>
            <div className='text-6xl font-bold p-15 leading-tight'><span className='text-white'>Find Your</span> <span className='text-mine-shaft-bright-sun-500'>Dream Jobs</span><span className='text-white'> Here</span></div>
            <div className='text-xl  leading-tight text-mine-shaft-300'>A smart job portal connecting job seekers with top employers. Search, apply, and get matched to the right opportunities quickly and easily.</div>
            <div className='leading-normal flex text-2xl p-4 gap-4 '>
              <TextInput className='bg-mine-shaft-900 flex-col justify-center text-mine-shaft-200 rounded-lg px-3 [&_input]:!text-mine-shaft-50'
      variant="unstyled"         
         size="xl"

      radius="xl"
      label=" Job Title"
      placeholder="Software Engineer"
    />
              <TextInput className='bg-mine-shaft-900 flex-col justify-center text-mine-shaft-200 rounded-lg px-3 [&_input]:!text-mine-shaft-50'
      variant="unstyled"
            size="xl"
radius="xl"
      label="Type"
      placeholder="Fulltime"
    />
           
            <button className='bg-mine-shaft-bright-sun-600 rounded-lg p-3 hover:bg-mine-shaft-bright-sun-500 cursor-pointer'><IconZoom stroke={2.5} height="50" width="50" /></button>
 </div>
        </div>
        <div className='  p-46 '>
            <img src="/girls.png" alt="" className='w-[40rem]'/>
            <div className='text-white text-2xl w-fit p-6 absolute'><Avatar.Group className=''>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>+10k found jobs</div>
        </div>
        
        </div>
  )
}

export default Dreamjob