import React from 'react'
import Search from "../Findjobs/Search"
import { Divider, Group, Text } from '@mantine/core';
import Searchbar from '../Findtalent/Searchbar';
import Findtalent from '../Findtalent/Findtalent';

const Findtalentpage = () => {
  return (
    <div className='min-h-[90vh] '>
                <Divider  m="5" size="xs" mx="xs" p="9" />
 <Searchbar/> 
                <Divider  m="20" size="xs" mx="xs" p="9" />
<Findtalent/>
 </div>
  )
}

export default Findtalentpage