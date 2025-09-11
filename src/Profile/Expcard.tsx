import { Button } from '@mantine/core'
import React, { useState } from 'react'
import Expinpcard from './Expinp';
import Expinp from './Expinp';

const Expcard = (props:any) => {
  const[edit,setEdit]=useState(false);
  return ( 
    !edit?<><div>
        <div>
             <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px" src={`/${props.company}.png`} alt="" /></div>
            <div>
                <div className='text-xl  mb-1 font-semibold'>{props.role}</div>
                <div className='text-xl '>{props.company} &#x2022;{props.location} </div>
            </div>
        </div>
        <div className='text-lg '>
                      {props.startDate} - {props.endDate}

        </div>
    </div>
    </div>
        <div className='text-xl text-mine-shaft-00 text-justify '>{props.description}</div>
{props.edit  && <div>
                     <Button onClick={()=>setEdit(true)} variant="outline" color="orange" size="md" radius="md">Edit</Button>
                     <Button variant="light" color="red" size="md" radius="md">Delete</Button>
      
    </div>}

  
</div></>:<><Expinp  setEdit={setEdit}/></>
    
  )
}

export default Expcard