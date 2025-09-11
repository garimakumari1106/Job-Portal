import React from 'react'
import { activeJobs } from '../Data/PostedJob'

const Active = () => {
  return (
    <div>
       { activeJobs.map((data:any,index:any)=> <div key={index} className=' p-4 '>
        <div className='bg-mine-shaft-900 pl-5 p-3 rounded-lg  border-l-2 border-l-mine-shaft-bright-sun-500'><div className='text-xl font-semibold'>{data.jobTitle}</div>
        <div className='text-lg' >{data.location}</div>
        <div className='text-lg'>{data.posted}</div> </div></div>)}
    </div>
  )
}

export default Active