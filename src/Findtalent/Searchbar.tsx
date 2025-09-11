import React, { useState } from 'react'
import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
import Multiinp from '../Findjobs/Multiinp';
import { Divider, Group, Text } from '@mantine/core';
import { RangeSlider } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import { Input } from '@mantine/core';


const Searchbar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
  
  const searchFields=[
    { title: "Job Title", icon: IconSearch, option: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, option: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Skills", icon: IconRecharging, option: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
]
   return (
     
     <div className='flex   '>
      <div className='w-1/5 flex p-2 gap-3 items-center'>
        <IconUserCircle stroke={2} height="30" width="30" className='text-mine-shaft-bright-sun-500 bg-mine-shaft-800 rounded-full  border-2 border-mine-shaft-800' />
           <Input variant="unstyled" size="lg" className='[&_input]:!placeholder-mine-shaft-200  ' placeholder="Talent Name" />

      </div>
 {
   searchFields.map((item,index)=><><div  key={index} className='w-1/5'>
      <Multiinp {...item}/>
      
      </div>             
        <Divider  p="5" size="xs" orientation="vertical" />
 </>)}
      
   < div className='flex-col w-1/5'>
   <div className='flex justify-between '>
     <div className='text-lg mx-3'>Salary</div>
     <div className='text-lg mx-4'>&#8377;{value[0]}LPA -&#8377;{value[1]}LPA</div>
     </div>
     <div className=' mx-4 '>
    <RangeSlider  color="orange" size="md" value={value} onChange={setValue} /></div><div/>
 
 
   </div></div>) 
 }

export default Searchbar