import React from 'react'
import Talentcars from '../Findtalent/Talentcars'
import { jobList } from '../Data/JobsData';
import { IconBookmark, IconClockHour9 } from '@tabler/icons-react';
import { Divider ,Text } from '@mantine/core';
import { talents } from '../Findtalent/TalentData';

const Recommendedjobs = (props: any) => {
  const fourTalents = talents.slice(0, 4); // get first 4 only

  return (
    <div className='w-1/3'>
      <div className='flex text-3xl font-semibold justify-between mx-9'>
        Recommended Talents
      </div>
     <div  className='flex flex-wrap justify-center p-8 gap-20'>
        {
            jobList.map((data,index)=> index<4 && <div key={index} className='bg-mine-shaft-900 p-6 w-96 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow:mine-shaft-600 !hover:border-5px'>
    <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px" src={`/${data.company}.png`} alt="" /></div>
            <div>
                <div className='text-md  mb-5 font-semibold'>{data.jobTitle}</div>
                <div className='text-xs '>{data.company} &#x2022; {data.applicants} </div>
            </div>
        </div>
        <div><IconBookmark className='text-mine-shaft-300 hover:cursor-pointer' stroke={2} /></div>
    </div>
    <div className='flex mt-3 gap-4 [&>div]:hover'>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.experience}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.location}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.location}</div>
    </div>
    <div className='p-2 text-xs !text-mine-shaft-300 text-justify'> <Text lineClamp={2}>{<> {data.description}
</>}
    </Text>                    <Divider    size="xl" mx="xs" my="5" />
</div>
    
    <div className='flex justify-between px-4'>
        <div className='font-semibold'>&#8377;{data.package}</div>
        <div className='flex items-center text-xs text-mine-shaft-200'><IconClockHour9 stroke={1.5} />{data.postedDaysAgo} Days Ago</div>
    </div>
    </div>)
        }
    </div>
    </div>
  )
}

export default Recommendedjobs;
