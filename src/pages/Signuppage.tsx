import { Divider } from '@mantine/core'
import React from 'react'
import Postedjob from '../Postedjob/Postedjob'
import Signup from '../Signup/Signup'
import { IconBriefcase } from '@tabler/icons-react'
import Login from '../Signup/Login'
import { useLocation } from 'react-router-dom'

const Signuppage = () => {
  const location=useLocation()
  return (
    <div className='min-h-[90vh] overflow-hidden   '>
       <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000  ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
        <div className={` w-[50vw] h-full gap-y-3 bg-mine-shaft-800 ${location.pathname=="/signup" ? "rounded-r-full":"rounded-l-full"} flex-col  flex items-center justify-center `}>
                <div className='text-mine-shaft-bright-sun-500 font-bold text-6xl flex items-center justify-center'>   
                   <IconBriefcase stroke={2.5} height="70" width="70" className='text-mine-shaft-bright-sun-500' />
                 <div className='pl-5'>JobNest</div>  </div>
                <div className='text-3xl font-semibold '>Find The Made For You</div>

        </div>   <Signup />          

        </div>

                    </div>
  )
}

export default Signuppage