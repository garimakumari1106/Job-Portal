import React, { useState } from 'react'
import Searchinp from './Searchinp'
import fields from '../Data/Profile';
import { Button, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

const Cinp = (props:any) => {
            const opt=fields;
              const [issuedate, setIssuedate] = useState<string | null>(null);
            

  return (
    <div>
        <div className='text-2xl font-semibold'>Add Certificate</div>
        <div> <div className='flex-col py-2  justify-start mx-4'>
       <div className='flex gap-20'> <div className='w-1/2 [&_input]:!text-md'><Searchinp  {...opt[0]} /></div>
        <div className='w-1/2 [&_input]:!text-md'><Searchinp {...opt[1]} /></div></div>
        </div></div>
        <div> <div className='flex-col py-2  justify-start mx-4'>
       <div className='flex gap-20'> <div className='w-1/2 [&_input]:!text-md'> <MonthPickerInput className='!w-1/2'
             label="Pick end date" minDate={issuedate||undefined}
             placeholder="Pick end  date" withAsterisk
             value={issuedate} 
             onChange={setIssuedate}
           /></div>
        <div className='w-1/2 [&_input]:!text-md'>  <TextInput
      label="Input label"
      withAsterisk
      placeholder="Input placeholder"
    /></div></div>
        </div></div>
         <div className='!gap-3'>
                                 <Button onClick={()=>props.setEdit(false)} variant="outline" color="orange" size="md" radius="md">Save</Button>
                                 <Button onClick={()=>props.setEdit(false)} variant="light" color="red" size="md" radius="md">Cancel</Button>
                  
                </div>
    </div>
  )
}

export default Cinp