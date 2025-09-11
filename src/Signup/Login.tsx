import { Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import React from 'react'
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className=' w-1/2 p-4  flex-col flex justify-center  px-20  '>
      <div className='text-3xl p-3 font-semibold text-mine-shaft-bright-sun-500'>Create Account</div>
      
     <TextInput withAsterisk leftSection={<IconAt stroke={2} />}
     className='[&_label]:font-semibold [&_label]:text-xl p-3 [&_input]:text-lg'
      size="md"
      radius="md"
      label="Email"
      placeholder="Your Email "
    />
    <PasswordInput withAsterisk
    className='[&_label]:font-semibold [&_label]:text-xl p-3 [&_input]:text-lg'
      size="md"
      radius="md"
      label="Password"
      placeholder="Password"
    />
  
    <Button fullWidth className='!text-lg !text-black bg-mine-shaft-bright-sun-500 text-center p-3 '>Sign Up</Button>
    <div className='text-lg text-center p-3'>Don't have an Account? <Link to={"/signup"} className='text-mine-shaft-bright-sun-500'>SignUp</Link></div>
    </div>
  )
}

export default Login