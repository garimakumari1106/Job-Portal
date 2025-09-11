import { Button, Divider } from '@mantine/core'
import Postjob from '../Postjobb/Postjob'


const Postjobpage = () => {
  return (
     <div className='min-h-[90vh] '>
                    <Divider  m="5" size="xs" mx="xs" p="9" />
                    <Postjob/>
               
     </div>
  )
}

export default Postjobpage