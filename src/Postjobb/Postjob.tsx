import React from 'react'
import Searchinp from './Searchinp'
import { fields } from '../Data/PostJob'
import { Button, TagsInput } from '@mantine/core';
import Texteditor from './Texteditor';
import { IconArrowBack } from '@tabler/icons-react';

const Postjob = () => {
    const opt=fields;
  return (<div className=' w-4/5 p-6 mx-auto '>
     <div className='text-3xl font-semibold  text-center mb-5'>Post  a  Job     </div>     
       <div className='flex py-2 gap-24 justify-center'>
        <div className='w-1/2 [&_input]:font-medium'><Searchinp {...opt[0]} /></div>
        <div className='w-1/2'><Searchinp {...opt[1]} /></div></div> 
 <div className='flex my-5  py-2 gap-24 justify-center'>
        <div className='w-1/2 '><Searchinp {...opt[2]} /></div>
        <div className='w-1/2'><Searchinp {...opt[3]} /></div></div> 
         <div className='flex py-2 gap-24 justify-center'>
        <div className='w-1/2 '><Searchinp {...opt[4]} /></div>
        <div className='w-1/2'><Searchinp {...opt[5]} /></div></div> 
        <div className='py-4'>  
             <TagsInput label="Press Enter to submit a tag" clearable className='placeholder:font-semibold'       acceptValueOnBlur
      splitChars={[',', ' ', '|']} placeholder="Enter Skills" size="lg" />
    
</div>
        <div className='text-lg font-lg'>Job Description</div>
        <Texteditor />
        <div className=' flex p-6 gap-8'>
   <Button variant="outline" color="orange" size="lg" radius="md">Publish Job</Button>
   <Button variant="light" color="orange" size="lg" radius="md">Save As Draft</Button>

        </div>
        </div>
   
  )
}

export default Postjob