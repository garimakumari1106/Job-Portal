import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { card, desc, skills } from '../Data/JobDescData'
import DOMPurify from 'dompurify'
import Recommendedjobs from './Recommendedjobs'
import { Link } from 'react-router-dom'
const Jobsdesc = () => {
  const datas= DOMPurify.sanitize(desc)  ;
  const skill=skills
  return (
    <div className='flex'>
      <div className='w-2/3'> <div className='flex  gap-7 items-center p-6 justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2 rounded-xl'><img height="60px" width="60px" src="/Google.png" alt="" /></div>
            <div>
                <div className='text-xl  mb-2 font-bold'>Software Engineer</div>
                <div className='text-md '>Google &#x2022; 15 Applicants &#x2022; 3 Days Ago </div>
            </div>
        </div>
        <div className='flex-col flex items-center justify-center'>
                         <Link to={'/apply-jobs'}>
                         <Button variant="light" color="orange" size="lg" radius="md" >Apply</Button>
                         </Link>

          <IconBookmark className='text-mine-shaft-300 hover:cursor-pointer mt-3' stroke={2} height="30px" width="30px" color="orange"/></div>
             
     </div>
          <Divider  m="5" size="xs" mx="xl" p="9" />
         <div className='flex  justify-between mx-24'>
      {card.map((datas:any,index:any)=><div key={index} className='mx-4 flex-col flex  items-center'>
      <ActionIcon className='!rounded-full '  variant="light" color="orange" size={50} aria-label="Settings" >
      <datas.icon  stroke={2}  />
    </ActionIcon>
    <div className='text-md text-mine-shaft-400'>{datas.name}</div>
        <div className='text-lg font-semibold text-mine-shaft-300'>{datas.value}</div>
        </div>
      )}
      

    </div>
              <Divider  m="5" size="xs" mx="xl" pb="9" />
             <div className=' px-4 mt-4 text-xl font-semibold'>Required Skills</div>
              <div className='flex flex-wrap'>
                {skill.map((data:any,index:any)=><div key={index} className='p-4'>
                
                   <ActionIcon variant="light" color="orange" className='!h-fit !w-fit !px-3 !text-lg !rounded-xl font-lg' >
{      skill[index]}    </ActionIcon>
              </div>)}</div>
     <Divider  m="5" size="xs" mx="xl" pb="9" />
<div dangerouslySetInnerHTML={{__html:datas}} className='mx-4 pb-7 [&_h4]:text-xl [&_h4]:font-semibold 
[&_h4]:pt-4 [&_p]:text-mine-shaft-300 [&_li]:text-mine-shaft-300
 '></div>
    
           <Divider  m="5" size="xs" mx="xl" pb="9"  />
<div className=''>
   <div className='flex  gap-7 items-center p-6 justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2 rounded-xl'><img height="30px" width="30px" src="/Google.png" alt="" /></div>
            <div>
                <div className='text-lg   font-bold'>Software Engineer</div>
                <div className='text-md '>10k+ Employee </div>
            </div>
        </div>
        <div className='flex-col flex items-center justify-center'>
                         <Link to={'/company-page'}>
                         <Button variant="light" color="orange" size="md" radius="md"   >Company Page</Button></Link>

          </div> </div>
          <div className='text-mine-shaft-300 text-lg p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis alias ipsum veniam et placeat, optio commodi error nisi repellat distinctio, autem neque, natus repudiandae expedita voluptas atque quasi aspernatur ab. Molestiae dicta dignissimos in facere! Laudantium ex cumque vero.
              </div>
     </div>
</div>
                   <Recommendedjobs/>

    </div>
  )
}

export default Jobsdesc