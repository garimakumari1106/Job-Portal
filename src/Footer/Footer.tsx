import React from 'react'
import { IconBriefcase } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const footer=[{title:"Product",
        one:"Find Job",
    two:"Find Company",
third:"Find Employee"},
{title:"Product",
        one:"Find Job",
    two:"Find Company",
third:"Find Employee"},
{title:"Product",
        one:"Find Job",
    two:"Find Company",
third:"Find Employee",
thirdd:"Find Employee"},]
   const location=useLocation();
  return  location.pathname!="/signup" ?
   <div className='flex gap-x-80 justify-start bg-mine-shaft-950 
   '><div className='w-1/4'> <div className='px-10 flex align items-center mt-20 gap-3  font-semibold text-3xl text-mine-shaft-bright-sun-500'>
          <IconBriefcase stroke={1.5} height="40" width="40"/>JobNest</div>
          <div className='text-lg text-white p-4'>Job portal with user profiles, skill updates, certfications,work experiences and admin job postings.</div>
          <div className='flex gap-3 ml-6  p-4 [&>div]:rounded-full [&>div]:bg-mine-shaft-900 hover:[&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-600'>
            <div><IconBrandFacebook stroke={1.5}  color="orange" height="35" width="35" /></div>
            <div><IconBrandX stroke={1.5}  color="orange" height="35" width="35"  /></div>
            <div><IconBrandInstagram stroke={1.5}   color="orange" height="35" width="35" /></div>
          </div></div>

       
    
  <div className='flex  gap-52 mt-20 px-25'>
    {footer.map((data,index)=>(<div key={index}>
       <div className="py-3 text-3xl font-semibold text-orange-400"> {data.title}</div>
       <div className='text-lg  text-white '>
        <div className='hover:text-orange-400'>{data.one}</div>
        <div className='hover:text-orange-400'>{data.two}</div>
        <div className='hover:text-orange-400'>{data.third}</div>
      <div>{data.thirdd}</div>

       </div>
  </div>))}
</div>
 </div>:<></>}
     

export default Footer