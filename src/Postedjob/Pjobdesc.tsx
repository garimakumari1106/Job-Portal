import { ActionIcon, Badge, Button, Divider } from '@mantine/core'
import React from 'react'
import { card, desc, skills } from '../Data/JobDescData'
import { IconBookmark } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

const Pjobdesc = () => {
    const datas= DOMPurify.sanitize(desc)  ;
  const skill=skills
  return (
    <div className=' p-5'>
        <div className='text-3xl font-bold p-6 flex items-start gap-3'>Software Engineer    <Badge  variant="light" color="orange"  radius="lg">Badge</Badge>
</div>
<div className='text-lg'>New York</div>
<div>
    <div className=''> <div className='flex  gap-7 items-center p-6 justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2 rounded-xl'><img height="60px" width="60px" src="/Google.png" alt="" /></div>
            <div>
                <div className='text-2xl  mb-2 font-bold'>Software Engineer</div>
                <div className='text-lg '>Google &#x2022; 15 Applicants &#x2022; 3 Days Ago </div>
            </div>
        </div>
        <div className='flex-col flex items-center justify-center gap-y-4'>
                         <Link to={'/apply-jobs'}>
                         <Button variant="light" color="orange" size="xl" radius="md" >Edit</Button>
                         </Link>

                         <Button variant="outline" color="red" size="xl" radius="md" >Delete</Button>
          </div>
             
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
                
                   <ActionIcon variant="light" color="orange" className='!h-fit !w-fit !px-3 !text-xl !rounded-xl font-lg' >
{      skill[index]}    </ActionIcon>
              </div>)}</div>
     <Divider  m="5" size="xs" mx="xl" pb="9" />
<div dangerouslySetInnerHTML={{__html:datas}} className='text-!xl mx-4 pb-7 [&_h4]:text-2xl [&_h4]:font-semibold 
[&_h4]:pt-4 [&_p]:text-mine-shaft-300 [&_li]:!text-2xl [&_li]:text-mine-shaft-300
 '></div>
</div>
    </div></div>
  )
}

export default Pjobdesc