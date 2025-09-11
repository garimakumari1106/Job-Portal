import React from 'react'

const Ccard = (props:any) => {
  return (
    <div>
             <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px"  src={`/${props.issuer}.png`} alt="" /></div>
            <div>
                <div className='text-lg  mb-1 font-semibold'>{props.issuer}</div>
                 <div className='text-md  mb-1 font-semibold text-mine-shaft-300'>{props.name}</div>

            </div>
        </div>
        <div className='flex-col items-center gap-y-4'>
            <div className='text-lg text-mine-shaft-300'>{props.issueDate}</div>
        <div className='text-md text-mine-shaft-300 '>{props.certificateId} </div></div>
        

    </div>
    </div>

  )
}

export default Ccard