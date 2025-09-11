import React from 'react'
import Search from "../Findjobs/Search"
import { Divider, Group, Text } from '@mantine/core';
import Searchbar from '../Findtalent/Searchbar';
import { IconArrowBack  } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import Rectalent from '../Talentprofile/Rectalent';
import { profile } from '../Findtalent/TalentData';
import Profile from '../Profile/Profile';

const Talentprofilepage = () => {
  return (
    <div className='min-h-[90vh] '>
                <Divider  m="5" size="xs" mx="xs" p="9" />
                <Link to={'/about'}>          
                <Button   leftSection={<IconArrowBack  stroke={1} />} variant="light" color="orange" size="md" radius="md" className='text-xl mx-3 gap-3'>Back</Button>
              </Link>
            <div className='flex justify-center '>
                 <Profile {...profile}  />
             </div>
 </div>
  )
}
 
export default Talentprofilepage