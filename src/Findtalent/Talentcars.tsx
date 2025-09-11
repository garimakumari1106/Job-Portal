import React, { useRef, useState } from 'react'
import { ActionIcon, Divider, Group,Modal,Text } from '@mantine/core';
import { IconCalendarWeek, IconClock, IconMapPin  } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { talents } from './TalentData'
import { DateInput, TimeInput } from '@mantine/dates';

import { IconHeart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import dayjs from 'dayjs';
const Talentcars = (props:any) => {
 const talent=props;
    const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>)
  return ( <div className='flex flex-wrap justify-between  p-8 gap-20'>{talents.map((talent:any,index:any)=>
    <div >
        <div className='bg-mine-shaft-900 p-6 w-96 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow:mine-shaft-600 !hover:border-5px'>
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
    
     <div className='flex justify-between px-4'>{props.invited? <div className='flex items-center text-sm text-mine-shaft-300 justify-start'><IconCalendarWeek  stroke={1.5} />Interview: August 27,2024  10:00 AM </div>
:
        <><div className='font-semibold'>&#8377;{talent.expectedCtc}</div><div className='flex items-center text-xs text-mine-shaft-200'><IconMapPin stroke={1.5} />{talent.location} </div></>}
     </div>
      <Divider    size="xl" mx="xs" my="5" />

        <div className='flex p-3 gap-3 '>
         {!props.invited &&<><Link to={'/talent-profile'}>

   <Button variant="outline" color="orange" size="sm" radius="md">Profile</Button>
                </Link>
                   {props.posted?<Button rightSection={<IconCalendarWeek stroke={1.5}/>} onClick={open} variant="light" color="orange" size="sm" radius="md">Schedule</Button>:<Button variant="light" color="orange" size="sm" radius="md">Message</Button>}
</>
                }
                  
      
{props.invited &&< ><div className='flex gap-4'>
<div>   <Button fullWidth variant="outline"  color="orange"  radius="md">Accept</Button>
</div>
<div>   <Button variant="light" color="orange" fullWidth  radius="md">Reject</Button>
</div></div></>}       
</div>
 <Modal opened={opened} onClose={close} size="xl" title="Schedule Interview" centered >
   <div className='!text-xl p-3'> <DateInput 
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Date " size="lg"
      placeholder=" Enter Date "
    /></div>
    <div className='p-3 pb-5'>    <TimeInput size="lg" label="Enter Time" ref={ref} rightSection={pickerControl} />
</div>
   <Button variant="light" fullWidth color="orange" size="lg" radius="md">Schedule</Button>

      </Modal>
     </div>
     
                             
          
    </div>)}</div>
  
    )
}

export default Talentcars
