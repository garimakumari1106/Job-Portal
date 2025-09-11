import React from 'react'
import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
import { Divider, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

import Multiinp from './Multiinp'

function Search() {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  const dropdownData = [
    { title: "Job Title", icon: IconSearch, option: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, option: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Experience", icon: IconBriefcase, option: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Job Type", icon: IconRecharging, option: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
  ];
  return (
          <div className='flex   '>

      {dropdownData.map((item, index) => <><div key={index} className='w-1/5'>
        <Multiinp {...item} />

      </div>
        <Divider p="5" size="xs" orientation="vertical" />
      </>)}

      <div className='flex-col w-1/5'>
        <div className='flex justify-between '>
          <div className='text-lg mx-3'>Salary</div>
          <div className='text-lg mx-4'>&#8377;{value[0]}LPA -&#8377;{value[1]}LPA</div>
        </div>
        <div className=' mx-4 '>
          <RangeSlider color="orange" size="md" value={value} onChange={setValue} /></div><div />


      </div></div>);
}

export default Search