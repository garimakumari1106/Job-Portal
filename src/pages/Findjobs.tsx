import React from 'react'
import Multiinp from '../Findjobs/Multiinp'
import Search from "../Findjobs/Search"
import { Divider, Group, Text } from '@mantine/core';
import Jobs from '../Findjobs/Jobs';

const Findjobs = () => {
  return (
    <div className='min-h-[100vh] '>
                <Divider  m="5" size="xs" mx="xs" p="9" />
 <Search/> 
                 <Divider  mt="20" size="xs" mx="xs" p="9" />

 <Jobs/> 
 </div>
  )
}

export default Findjobs