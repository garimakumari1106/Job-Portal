import React from 'react'
import { IconDeviceFloppy, IconMapPin, IconPencil, IconPlus  } from '@tabler/icons-react';
import { ActionIcon, Button, TagsInput, Textarea } from '@mantine/core';
import { Divider, Group, Text } from '@mantine/core';
import Expcard from './Expcard';
import Ccard from './Ccard';
import  { useState } from 'react';
import Searchinp from '../Profile/Searchinp';
import talents from '../Data/Profile';
import fields from '../Data/Profile';
import Expinp from './Expinp';
import Cinp from './Cinp';

const Profile = (props:any) => {
const [edit, setEdit] = useState<boolean[]>([false, false, false, false, false]);
  const handleEdit=(index:any)=>{
    const newEdit=[...edit];
    newEdit[index]= !newEdit[index];
    setEdit(newEdit);
  }
    const [addedit,setAddedit]=useState(false)
    const [addcerti,setAddcerti]=useState(false)

    const opt=fields;
      const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');
  const [skill, setSkill] = useState<string[]>(['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']);

  return (
    <div className="w-4/5">
        <div className='relative'>
            <img src="/banner.jpg" alt="" className='rounded-t-3xl p-4' />
           <img src="/avatar.png" alt="" className="absolute h-48 rounded-full w-48 -bottom-1   left-9 border-8 border-mine-shaft-950" />
        </div>
        <div>
          <div className='flex justify-between p-5'>
            <div >
                <div className='text-2xl   font-semibold'>{props.name}</div>
                {edit[0]?<><div className='flex-col py-2  justify-start mx-4'>
       <div className='flex gap-20'> <div className='w-1/2 [&_input]:font-medium'><Searchinp  {...opt[0]} /></div>
        <div className='w-1/2'><Searchinp {...opt[1]} /></div></div>
       <div className='w-1/3'> <Searchinp {...opt[2]} /></div> </div></>:<> <div className='text-xl '>{props.role} &#x2022; {props.company} </div>
                <div className='flex items-center text-lg text-mine-shaft-200'><IconMapPin  stroke={1.5} />New York ,United States </div></>}
               
            </div>
 <ActionIcon onClick={
  ()=>handleEdit(0) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      {edit[0]?<IconDeviceFloppy style={{ width: '90%', height: '90%' }} stroke={1.5} />:<IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />}
    </ActionIcon>            </div>
     
          <div>
           <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className='p-4'>
              <div className='text-2xl font-semibold mb-2 flex justify-between'>About <ActionIcon onClick={
  ()=>handleEdit(1) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      {edit[1]?<IconDeviceFloppy style={{ width: '90%', height: '90%' }} stroke={1.5} />:<IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />}
    </ActionIcon>   </div>
             {edit[1]?  <Textarea
      value={about}
      onChange={(event) => setAbout(event.currentTarget.value)}
    /> : <div className='text-mine-shaft-300 text-xl'>{about}</div>}
            </div>
          </div>
           <div>
           <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2 flex justify-between'>Skills <ActionIcon onClick={
  ()=>handleEdit(2) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      {edit[2]?<IconDeviceFloppy style={{ width: '90%', height: '90%' }} stroke={1.5} />:<IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />}
    </ActionIcon>   </div>
            {edit[2]? <TagsInput data={[]}  value={skill} onChange={setSkill} />:
             <div className=' flex flex-wrap gap-8'>    
                      {
                      skill.map((skill:any,index:any)=>( <div key={index} 
                      className=' text-mine-shaft-bright-sun-500 bg-mine-shaft-bright-sun-400 bg-opacity-10 rounded-xl py-1 px-2 text-lg'> {skill}

                      </div>))} 
              </div> }
          </div>
          <Divider  m="5" size="xs" mx="xs" p="9" />
            <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2 flex justify-between'>Experience <div className='flex gap-5'>
                 <ActionIcon onClick={ ()=>setAddedit(true) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      <IconPlus style={{ width: '90%', height: '90%' }} stroke={1.5} /> </ActionIcon> 
                <ActionIcon onClick={
  ()=>handleEdit(3) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      {edit[3]?<IconDeviceFloppy style={{ width: '90%', height: '90%' }} stroke={1.5} />:<IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />}
    </ActionIcon></div>   </div>
              <div className='flex flex-col gap-y-9'>
                {props.experience.map((date:any,index:any)=> <Expcard  key={index} 
                         {...date} edit={edit[3]}/>)}
                         {addedit && <Expinp add setEdit={setAddedit}/> }
                         </div> 
                        
              </div>
                        <Divider  m="5" size="xs" mx="xs" p="9" />
             <div className=' p-4'>
              <div className='text-2xl font-semibold mb-2 flex justify-between'>Certifications 
                              <div className=' flex gap-4'>  <ActionIcon onClick={ ()=>setAddcerti(true) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      <IconPlus style={{ width: '90%', height: '90%' }} stroke={1.5} /> </ActionIcon> 
                <ActionIcon onClick={
  ()=>handleEdit(4) } variant="outline" color="orange" size="lg" radius="md" aria-label="Settings">
      {edit[4]?<IconDeviceFloppy style={{ width: '90%', height: '90%' }} stroke={1.5} />:<IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />}
    </ActionIcon>   </div></div>
<div className='flex flex-col gap-y-9'>{props.certifications.map((certi:any,index:any)=> <Ccard edit={edit[4]} key={index} 
                         {...certi} />)}
                         {addcerti && <Cinp setEdit={setAddcerti}/>}
                         </div>               </div>             
              
        </div>
    </div>
        </div>

  )
}

export default Profile

function usestate(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
