import { Tabs } from '@mantine/core'
import React from 'react'
import { talents } from '../Findtalent/TalentData'
import Talentcars from '../Findtalent/Talentcars'
import { jobList } from '../Data/JobsData'
import Jobcardsss from './Jobcardsss'

const Jobhistory = () => {
  return (
    <div>
       <div className='p-5'> <Tabs radius="lg" variant="outline" defaultValue="Applied" className='!text-lg ' >
      <Tabs.List className='[&_button[data-active="true"]]:!text-orange-400 font-semibold [&_button]:!text-lg '>
        <Tabs.Tab value="Applied"  >
                      Applied

        </Tabs.Tab>
        <Tabs.Tab value="Saved" >
          Saved 
        </Tabs.Tab>
        <Tabs.Tab value="Offered" >
          Offered
        </Tabs.Tab>
        <Tabs.Tab value="Interviewing" >
          Interviewing
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Applied"><div>
{jobList.slice(0,1).map((data:any,index:any)=> <Jobcardsss key={index} {...data} applied/>)}</div>
      </Tabs.Panel>

      <Tabs.Panel value="Saved"><div>
{jobList.slice(0,1).map((data:any,index:any)=> <Jobcardsss key={index} {...data} saved/>)}</div>
      </Tabs.Panel>

      <Tabs.Panel value="Offered"><div>
{jobList.slice(0,1).map((data:any,index:any)=> <Jobcardsss key={index} {...data} offered/>)}</div>
      
  </Tabs.Panel>
  <Tabs.Panel value="Interviewing"><div>
{jobList.slice(0,1).map((data:any,index:any)=> <Jobcardsss key={index} {...data} interview/>)}</div>
      
  </Tabs.Panel>
    </Tabs></div>
    </div>
  )
}

export default Jobhistory