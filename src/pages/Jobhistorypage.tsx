import { Divider } from '@mantine/core'
import React from 'react'
import Postedjob from '../Postedjob/Postedjob'
import Jobhistory from '../Jobhistory/Jobhistory'

const Jobhistorypage = () => {
  return (
    <div className='min-h-[90vh] '>
                    <Divider  m="5" size="xs" mx="xs" p="9" />
                    <Jobhistory/>
                    </div>
  )
}

export default Jobhistorypage