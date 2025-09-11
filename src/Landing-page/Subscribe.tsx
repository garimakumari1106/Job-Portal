import React from 'react'
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';

const Subscribe = () => {
  return (
    <div className='bg-mine-shaft-900  flex  items-center justify-center  border-mine-shaft-900 rounded-xl mt-20 mx-40'>
        <div className='  text-white  w-2/5   text-5xl font-semibold mt-10 mb-10'>Never Want To Miss <br/> Any 
      <span className='text-mine-shaft-bright-sun-500 '> Job News? </span>  </div>
      <div className='flex items-center'>
        <TextInput className="[&_input]:text-3xl rounded-md bg-mine-shaft-600 [&_input]: text-mine-shaft-bright-sun-100"
              variant="unstyled"
      size="xl"
      radius="xl"
      placeholder="Your@email.com"
    />
   <Button className="text-white text-2xl font-semibold" variant="filled" color="orange" size="xl"  radius="md">Subscribe</Button>
      </div>
      </div>
  )
}

export default Subscribe