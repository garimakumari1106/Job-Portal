import React from 'react'
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { companies, jobCategory } from '../Data/Data';



const Jobcategory = () => {
  const company=companies.slice(0,1);
  return (
    <div className='m-32'><div className='flex justify-center
     text-white  p-4   
    text-5xl font-semibold'>Browse
      <span className='text-mine-shaft-bright-sun-500 '>Job</span>
      Category</div>
      <div className='flex justify-center text-xl text-center p-5 pb-9 text-yellow-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus. Ab sit voluptatem laboriosam odio repellat accusantium quasi possimus rerum inventore totam voluptate, vitae error ipsum quisquam quae alias eius recusandae, tempora molestiae dolore iste dolor sapiente ea quo. Sapiente consectetur voluptas, fuga quis accusamus doloremque reiciendis commodi quas ipsa!
      </div>
   <Carousel  nextControlIcon={<IconArrowRight size={30} />}
      previousControlIcon={<IconArrowLeft size={30} />}  className='focus-visible:[&_button]:!outline-none [&_button]:!bg-mine-shaft-bright-sun-400 [&_button]:hover:opacity-75 
       [&_button]:opacity-0 [&_button]:hover: opacity-100 hover:' 
      slideSize="22%"
      slideGap="45"
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: 'center' 
        
      }}
    >
        {jobCategory.map((category:any,index:any)=><Carousel.Slide key={index} > 
            <div className=' flex flex-col items-center w-66 p-8  border-2 rounded-xl border-mine-shaft-bright-sun-500   '> 

        {company.map((data:any,index:any)=> <div className='bg-mine-shaft-bright-sun-500 rounded-full  '>
                <img className=' h-20 w-20' src={`/${data}.png`} alt="" />
                </div>)}
              <div className=' flex flex-col items-center p-4'>
                <div className='text-white font-bold text-xl'>{category.name}</div>
                <div className='text-white text-center'>{category.desc}</div>
                <div className='text-mine-shaft-bright-sun-500 text-xl'>{category.jobs}+ jobs posted</div>
             </div> 
             </div></Carousel.Slide>)}
          
    
    </Carousel>
        
             
  
     
    </div>
    
     
  )
}

export default Jobcategory