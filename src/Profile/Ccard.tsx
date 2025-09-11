import React, { useState } from 'react'
import Cinp from './Cinp'
import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'

const Ccard = (props:any) => {
  const[edit,setEdit]=useState(false)
  return (
<div> 
             <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px"  src={`/${props.issuer}.png`} alt="" /></div>
            <div>
                <div className='text-lg  mb-1 font-semibold'>{props.issuer}</div>
                 <div className='text-md  mb-1 font-semibold text-mine-shaft-300'>{props.name}</div>

            </div>
        </div>
        <div className='flex items-center gap-3'><div className='flex-col items-center gap-y-4'>
            <div className='text-lg text-mine-shaft-300'>{props.issueDate}</div>
        <div className='text-md text-mine-shaft-300 '>{props.certificateId} </div></div>
        

   
  { props.edit &&  <ActionIcon  variant="outline" color="red.8" size="lg" radius="md" aria-label="Settings">
         <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>}</div> </div></div>
   

  )
}

export default Ccard