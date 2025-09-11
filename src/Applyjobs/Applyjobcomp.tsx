import { ActionIcon, Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import React, { useState } from 'react'
import Searchinp from '../Postjobb/Searchinp'
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Applyjobcomp = () => {
  const [preview,setPreview]=useState(false);
    const [sec,setSec]=useState(5);
const navigate=useNavigate();
  const handlePreview=()=>{setPreview(!preview); window.scrollTo({top:0,behavior:'smooth'})}
    const [submit,setSubmit]=useState(false);
  const handleSubmit=()=>{setSubmit(true);
    let x=5;
    
    setInterval(()=>{
      x--;
      setSec(x);
      if (x==0)
   navigate('/find-jobs') },1000)
  }

    const checkIcon = <IconCheck size={20} />;

  return (<>
   <LoadingOverlay className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'orange', type: 'bars' }}
        />
    
        <div className=' w-2/3 mx-auto  '>
        <div className=' flex gap-5 items-center '>
            <div className='bg-mine-shaft-700 p-2 rounded-xl'><img height="60px" width="60px" src="/Google.png" alt="" /></div>
            <div>
                <div className='text-xl  mb-2 font-bold'>Software Engineer</div>
                <div className='text-md '>Google &#x2022; 15 Applicants &#x2022; 3 Days Ago </div>
            </div>
        </div>
        <Divider my="15" />
         <div className='text-2xl font-semibold pb-7 ' >Submit Your Application</div>
         <div>
<div className='flex my-5  py-2 gap-40 '>
                <div className='w-1/2  [&_label]:text-lg [&_label]:font-bold [&_input]:text-md'><TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""}`} size="md" withAsterisk radius="md" label="Full Name"  placeholder="Enter Name" /></div>
        <div className='w-1/2 [&_label]:text-lg [&_label]:font-bold [&_input]:text-md'><TextInput size="md"  radius="md" withAsterisk label="Email" placeholder="Enter Email"readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""}`}/></div>
        </div> 
        <div className='flex my-5  py-2 gap-40 '>
                <div className='w-1/2 [&_label]:text-lg [&_label]:font-bold [&_input]:text-md '><NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""}`} size="md"  radius="md"  label="Phone Number" placeholder="Don't enter more than 20 and less than 10" min={0} max={9999999999} hideControls/></div>
        <div className='w-1/2 [&_label]:text-lg [&_label]:font-bold [&_input]:text-md'><TextInput size="md" readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""}`} radius="md" withAsterisk label=" Enter Website" placeholder="Enter URL"/></div>
        </div>    
        <div className='[&_label]:text-xl  [&_label]:font-bold flex-col  '>  
            <FileInput  readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""} pb-5`}
      label="Attach your CV" size="md"  radius="md" leftSection=""
      withAsterisk
      placeholder="Your CV"
    />
    <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 ":""} pb-9`}
      size="md" withAsterisk         minRows={5} autosize

      radius="md"
      label="Cover Letter"
      placeholder="" 
    />     {!preview &&  <Button  onClick={handlePreview} variant="light" color="orange"  size="lg"fullWidth >Preview</Button>}
 {preview && <div className='flex gap-14'>
   <Button  onClick={handlePreview} variant="outline" color="orange"  size="lg" fullWidth >Edit</Button>
    <Button  onClick={handleSubmit} variant="light" color="orange"  size="lg" fullWidth >Submit</Button>
  </div>}
</div>
     
         </div>

    </div>
     <Notification  withCloseButton={false} className={`!border-orange-500 z-[1001] !fixed top-0 left-[40%] ${submit ? "translate-y-0":"-translate-y-28" } transition-duration-300 ease-in-out `} 
     icon={checkIcon } color="teal" title="Application Submitted" mt="lg"
    withBorder >
Redirecting  to Find Jobs in {sec} sec...     </Notification></>
  )
}

export default Applyjobcomp



