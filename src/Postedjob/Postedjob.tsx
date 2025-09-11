import { Tabs } from '@mantine/core'
import React, { useState } from 'react'
import Active from './Active'
import Pjobdesc from './Pjobdesc'
import Talentcars from '../Findtalent/Talentcars'
import { talents } from '../Findtalent/TalentData'

const Postedjob = (props:any) => {
    const talent=props;

  return (<div className='flex'>
    <div className='w-1/6 '>
        <div className='text-4xl font-bold p-5'>Jobs</div>
        <div className=' font-md   [&_button]:!text-xl mx-5 '>
    <Tabs variant="pills" defaultValue="active" >
      <Tabs.List className='[&_button[aria-selected="false"]]:bg-mine-shaft-900' >
        <Tabs.Tab   value="active"     className="px-6 py-3 text-xl font-semibold rounded-md bg-gray-600 text-white"
> Active [4]</Tabs.Tab>
        <Tabs.Tab value="draft">Draft [4] tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="active">
        <Active/> </Tabs.Panel>
      <Tabs.Panel value="draft">Draft [4]</Tabs.Panel>
    </Tabs>
        </div>
    </div>
    <div className='w-5/6'>   <div className='p-5'> <Tabs radius="lg" variant="outline" defaultValue="Overview" className='!text-lg ' >
      <Tabs.List className='[&_button[data-active="true"]]:!text-orange-400 font-semibold [&_button]:!text-lg '>
        <Tabs.Tab value="Overview"  >
                      About

        </Tabs.Tab>
        <Tabs.Tab value="Applicants" >
          Applicants 
        </Tabs.Tab>
        <Tabs.Tab value="Invited" >
          Invited
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Overview">
          <Pjobdesc/>
      </Tabs.Panel>

      <Tabs.Panel value="Applicants"><div>
{talents.slice(0,1).map((talent:any,index:any)=> <Talentcars key={index} {...talent} posted/>)}</div>
      </Tabs.Panel>

      <Tabs.Panel value="Invited"><div>
{talents.slice(0,1).map((talent:any,index:any)=> <Talentcars key={index} {...talent} invited/>)}</div>
      
  </Tabs.Panel>
    </Tabs></div></div>
    </div>
  )
}

export default Postedjob