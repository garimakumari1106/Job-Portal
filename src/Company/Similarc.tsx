import { ActionIcon } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'
import Company from './Company'
import { companyData, similar } from '../Data/Company'

const Similarc = (props:any) => {
    
  return (
    <div className=''>{similar.map((datas:any,index:any)=>(<div key={index}  className=' mb-6 mx-14'>
           <div className='bg-mine-shaft-700 flex items-center p-3'> <div className='bg-mine-shaft-700 flex gap-6 items-center '> <div className='bg-mine-shaft-700 p-2'><img height="50px" width="50px" src={`/${datas.name}.png`} alt="" /></div>

            <div>
                <div className='text-xl font-semibold'>{datas.name}</div>
                <div  className='text-lg'>{datas.employees} Employees</div>
            </div></div>
            <div className='ml-72'> <ActionIcon size="xl" variant="light" aria-label="Settings">
      <IconExternalLink   stroke={1.5} />
    </ActionIcon></div>
        </div></div>)) }
       
    </div>
  )
}

export default Similarc