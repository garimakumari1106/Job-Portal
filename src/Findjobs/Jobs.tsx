import React from 'react'
import Sort from './Sort'
import Jobscard from './Jobscard'

const Jobs = () => {
  return (<div className='m-6'>
    <div className='flex text-3xl font-semibold justify-between m-6'>Recommended Jobs 
        <div><Sort/></div>
        
    </div>
    <Jobscard /></div>
    
  )
}

export default Jobs