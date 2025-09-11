import React from 'react'
import { IconBriefcase } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import { Indicator } from '@mantine/core';
import navlinks from './navlinks';
import { useLocation } from 'react-router-dom';
import Profilemenu from './Profilemenu';
const Header = () => {
  const location=useLocation();
  return  location.pathname!="/signup" && location.pathname!="/login" ?
    <div className='bg-mine-shaft-950 w-100% p-4 flex justify-between items-center  '>
        <div className='px-10 flex align items-center justify-center gap-6  font-bold text-5xl text-mine-shaft-bright-sun-500'>
          <IconBriefcase stroke={2.5} height="70" width="70"/>JobNest</div>
        <div className='  '>
              {navlinks()}   
          </div>
        <div className='text-white gap-6 flex pr-6'>
          <Profilemenu/>
            <div className='bg-mine-shaft-900 p-1 rounded-full '>  <Indicator  processing size={10} offset={7} color=" #f99b07">
              <IconBell stroke={1.5} height="30" width="30" /></Indicator></div>
            
            <div><IconSettings stroke={1.5} height="30" width="30" /></div>
        </div>
    </div>:<></>
  
}

export default Header