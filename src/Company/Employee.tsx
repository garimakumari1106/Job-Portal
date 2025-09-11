import { Button, Divider ,Text } from '@mantine/core'
import { IconHeart, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { talents } from '../Findtalent/TalentData'

const Employee = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-between  p-8   gap-7'>
        {
          talents.map((talent:any,index:any)=>  <div className='bg-mine-shaft-900 p-6 w-96 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow:mine-shaft-600 !hover:border-5px'>
     <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2 rounded-full'><img className='rounded-full' height="40px" width="40px" src={`/${talent.image}.png`} alt="" /></div>
            <div>
                <div className='text-md  mb-5 font-semibold'>{talent.name}</div>
                <div className='text-xs '>{talent.role} &#x2022; {talent.company} </div>
            </div>
        </div>
        <div><IconHeart className='text-mine-shaft-300 hover:cursor-pointer' stroke={2} /></div>
     </div>
     <div className='flex mt-3 gap-4 [&>div]:hover'>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{talent.topSkills[0]}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{talent.topSkills[1]}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{talent.topSkills[2]}</div>
     </div>
      <div className='p-2 text-xs !text-mine-shaft-300 text-justify'> <Text lineClamp={2}>{<> {talent.about}
      </>}
     </Text>                    <Divider    size="xl" mx="xs" my="5" />
     </div>
    
     <div className='flex justify-between px-4'>
        <div className='font-semibold'>&#8377;{talent.expectedCtc}</div>
        <div className='flex items-center text-xs text-mine-shaft-200'><IconMapPin  stroke={1.5} />{talent.location} </div>
     </div>
      <Divider    size="xl" mx="xs" my="5" />

        <div className='flex p-3 gap-3 '>
            <Link to={'/talent-profile'}>          
   <Button variant="outline" color="orange" size="sm" radius="md">Profile</Button>
             </Link>
<div>      
   <Button variant="light" color="orange" size="sm" radius="md">Message</Button>
</div>        
</div>
     </div>
     )
        }                      
          
    </div>
    </div>
  )
}

export default Employee