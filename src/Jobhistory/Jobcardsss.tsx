import { ActionIcon, Button, Divider ,Text } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconCalendarWeek, IconClockHour9 } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { jobList } from '../Data/JobsData'

const Jobcardsss = (props:any) => {
  return (
    <div><Link to ="/jobs" className='flex flex-wrap justify-center p-8 gap-20'>
        {
            jobList.map((data,index)=>  <div key={index} className='bg-mine-shaft-900 p-6 w-96 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow:mine-shaft-600 !hover:border-5px'>
    <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px" src={`/${data.company}.png`} alt="" /></div>
            <div>
                <div className='text-md  mb-5 font-semibold'>{data.jobTitle}</div>
                <div className='text-xs '>{data.company} &#x2022; {data.applicants} </div>
            </div>
        </div>
        <div>{props.saved?<IconBookmarkFilled className=' hover:cursor-pointer text-mine-shaft-bright-sun-500' stroke={2}/>:<IconBookmark className=' hover:cursor-pointer text-mine-shaft-300' stroke={2} />}</div>
    </div>
    <div className='flex mt-3 gap-4 [&>div]:hover'>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.experience}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.jobType}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.location}</div>
    </div>
    <div className='p-2 text-xs !text-mine-shaft-300 text-justify'> <Text lineClamp={2}>{<> {data.description}
</>}
    </Text>                    <Divider    size="md" mx="xs" my="5" />
</div>
    
    <div className='flex justify-between px-4'>
        <div className='font-semibold'>&#8377;{data.package}</div>
        <div className='flex items-center text-xs text-mine-shaft-200'><IconClockHour9 stroke={1.5} /> {props.applied?"Applied":"Posted"} {data.postedDaysAgo} Days Ago</div>
    </div>{props.offered && <div><div className='pb-1'><Divider    size="md" mx="xs" my="5" /></div>
        <div className='gap-4 flex'>    <Button fullWidth variant="outline" color="orange" size="sm" radius="md">Accept</Button>
        
          <Button variant="light"  fullWidth color="orange" size="sm" radius="md">Reject</Button>
        </div></div>} 
        {props.interview && <div>
            <div><Divider    size="md" mx="xs" my="5" /></div>
            <div className=' px-4 gap-4 flex items-center text-sm text-mine-shaft-300 justify-start '><IconCalendarWeek color="orange" stroke={1.5} />Interview: August 27,2024  10:00 AM </div>
        </div>
            }
    </div>)
        }
        
    </Link>
  </div>
  )
}

export default Jobcardsss