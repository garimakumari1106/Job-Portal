import React from 'react'
import { companyData } from '../Data/Company'

const About = () => {
    const data:{[key:string]:any}=companyData
  return (
    <div>
        {
            Object.keys(data).map((key:any,index:any)=>key!='Name' && <div key={index} className='p-4'>
            <div className='text-xl font-semibold'>
                {key}
            </div>
            {key!="Website" &&  <div className='text-md text-mine-shaft-300'>{ key!="Specialties" ? data[key]: data[key].map((item:any,index:any) => <span key={index} >  &bull; {item}</span>)}</div>}
             {key=="Website" && <a href={ data[key]}  target="_blank" className='text-md text-mine-shaft-bright-sun-600'>{ data[key]}</a>}
</div>
            )
        }
    </div> 
  )
}

export default About