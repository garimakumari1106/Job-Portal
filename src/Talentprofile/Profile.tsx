import React from 'react'
import { IconMapPin  } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Divider, Group, Text } from '@mantine/core';
import Expcard from './Expcard';
import Ccard from './Ccard';

const Profile = (props:any) => {
  return (
    <div className='w-2/3'>
        <div className='relative'>
            <img src="banner.jpg" alt="" className='rounded-t-3xl p-4' />
           <img src="/avatar.png" alt="" className="absolute h-48 rounded-full w-48 -bottom-1   left-9 border-8 border-mine-shaft-950" />
        </div>
        <div>
          <div className='flex justify-between p-5'>
            <div >
                <div className='text-2xl   font-semibold'>{props.name}</div>
                <div className='text-xl '>{props.role} &#x2022; {props.company} </div>
                <div className='flex items-center text-lg text-mine-shaft-200'><IconMapPin  stroke={1.5} />New York ,United States </div>
            </div>
               <Button variant="light" color="orange" size="md" radius="md">Message</Button>
            </div>
          <div>
           <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className='p-4'>
              <div className='text-2xl font-semibold mb-2'>About</div>
              <div className='text-mine-shaft-300 text-xl'>{props.about}</div>
            </div>
          </div>
           <div>
           <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2'>Skills</div>
             
             <div className=' flex flex-wrap gap-8'>    
                      {
                      props.skills.map((skill:any,index:any)=>( <div key={index} 
                      className=' text-mine-shaft-bright-sun-500 bg-mine-shaft-bright-sun-400 bg-opacity-10 rounded-xl py-1 px-2 text-lg'> {skill}

                      </div>))} 
              </div> 
          </div>
          <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2'>Experience</div>
               <div className='flex flex-col gap-y-9'>{props.experience.map((date:any,index:any)=> <Expcard key={index} 
                         {...date} />)}</div> 
                        
              </div>
                        <Divider  m="5" size="xs" mx="xs" p="9" />
             <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2'>Certifications</div>
<div className='flex flex-col gap-y-9'>{props.certifications.map((date:any,index:any)=> <Ccard key={index} 
                         {...date} />)}</div>               </div>             
              
        </div>
    </div>
        </div>

  )
}

export default Profile