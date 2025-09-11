import { Button, Checkbox, Textarea } from '@mantine/core'
import React, { useState } from 'react'
import Searchinp from './Searchinp'
import fields from '../Data/Profile';
import { MonthPicker, MonthPickerInput } from '@mantine/dates';

const Expinpcard = (props:any) => {
    const [checked, setChecked] = useState(false);

        const opt=fields;
          const [value, setValue] = useState('');
      const [desc, setDesc] = useState('As  Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.');
  const[edit,setEdit]=useState(false);
  const [startdate, setStartdate] = useState<string | null>(null);

  const [enddate, setEnddate] = useState<string | null>(null);

  return (
    <div>
        <div className='text-xl font-semibold'>{props.add?"Add Experience":"Edit Experience"}  <div/>
       <div className='flex-col py-2  justify-start mx-4'>
       <div className='flex gap-20'> <div className='w-1/2 [&_input]:!text-md'><Searchinp  {...opt[0]} /></div>
        <div className='w-1/2 [&_input]:!text-md'><Searchinp {...opt[1]} /></div></div>
       <div className='[&_input]:!text-md'> <Searchinp {...opt[2]} /></div> </div>
        
    </div>
        <div className='p-4 !text-xl [&_input]:!text-xl [&_label]:font-semibold [&_label]:!text-xl text-mine-shaft-00 text-justify '> 
          <Textarea value={desc} label="Summary" placeholder='Enter Summary...'
      onChange={(event) => setDesc(event.currentTarget.value)}
    /></div>
<div className=' flex p-4  gap-20 [&_label]:font-semibold [&_label]:!text-xl'>  <MonthPickerInput
      label="Pick start date" withAsterisk
      placeholder="Pick start date" maxDate={enddate||undefined}
      value={startdate}
      onChange={setStartdate}  className='!w-1/2'
    />
     <MonthPickerInput className='!w-1/2'
      label="Pick end date" minDate={startdate||undefined}
      placeholder="Pick end  date" withAsterisk
      value={enddate} disabled={checked}
      onChange={setEnddate}
    /> </div>
    <div className='p-'> <Checkbox autoContrast
      defaultChecked  checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      label="Currently working here"
    /></div>
    <div>
                         <Button onClick={()=>props.setEdit(false)} variant="outline" color="orange" size="md" radius="md">Save</Button>
                         <Button onClick={()=>props.setEdit(false)} variant="light" color="red" size="md" radius="md">Cancel</Button>
          
        </div>
    </div>
  )
}

export default Expinpcard