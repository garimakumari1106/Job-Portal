import React from 'react'
import Search from "../Findjobs/Search"
import { Divider, Group, Text } from '@mantine/core';
import Searchbar from '../Findtalent/Searchbar';
import { IconArrowBack  } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import Profile from '../Talentprofile/Profile';
import Rectalent from '../Talentprofile/Rectalent';
import Company from '../Company/Company';

const Companypage = () => {
  return (
    <div className='min-h-[90vh] '>
                <Divider  m="5" size="xs" mx="xs" p="9" />
                <Link to={'/jobs'}>          
                <Button   leftSection={<IconArrowBack  stroke={1} />} variant="light" color="orange" size="md" radius="md" className='text-xl mx-3 gap-3'>Back</Button>
              </Link>
           <Company/>
 </div>
  )
}
 
export default Companypage