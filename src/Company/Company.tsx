import { Avatar, Button, Divider } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Tabs } from '@mantine/core'
import About from './About'
import Jobs from './Jobs'
import Employee from './Employee'
import Similarc from './Similarc'

const Company = () => {
  return (<div className='flex'>
         <div className='w-2/3'>
        <div className='relative'>
            <img src="banner.jpg" alt="" className='rounded-t-3xl p-4' />
           <img src="/Google.png" alt="" className="absolute h-48 rounded-full w-48 bg-mine-shaft-950 -bottom-2   left-9 border-8 border-mine-shaft-950" />
        </div>
        <div>
          <div className='flex justify-between p-5 mx-3'>
            <div >
                <div className='text-2xl   font-semibold'>Google</div>
                 <div className='flex items-center text-lg text-mine-shaft-200'><IconMapPin  stroke={1.5} />New York ,United States </div>
            </div>
             <Avatar.Group  >
      <Avatar src="avatar.png" size="lg"/>
      <Avatar src="avatar1.png" size="lg" />
      <Avatar src="avatar2.png" size="lg"/>
      <Avatar size="lg">+10k</Avatar >
    </Avatar.Group>
            </div>
          <div>
           <Divider  m="5" size="xs" mx="xl" p="9" />
    </div>
        </div>
        <div className='p-5'> <Tabs radius="lg" variant="outline" defaultValue="About" className='!text-lg ' >
      <Tabs.List className='[&_button[data-active="true"]]:!text-orange-400 font-semibold [&_button]:!text-lg '>
        <Tabs.Tab value="About"  >
                      About

        </Tabs.Tab>
        <Tabs.Tab value="Jobs" >
          Jobs 
        </Tabs.Tab>
        <Tabs.Tab value="Employee" >
          Employee
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="About">
          <About/>
      </Tabs.Panel>

      <Tabs.Panel value="Jobs">
        <Jobs/>
      </Tabs.Panel>

      <Tabs.Panel value="Employee">
<Employee/>      </Tabs.Panel>
    </Tabs></div>

            </div >
                <div className=''>  
                      <h2 className='w-1/3 mx-14 text-2xl font-semibold  pb-6 '>Similar Companies</h2>
<Similarc/>
</div> 
</div>

  )
}

export default Company