import React from 'react'
import Dreamjob from '../Landing-page/Dreamjob'
import Companyy from '../Landing-page/Companyy'
import Jobcategory from '../Landing-page/Jobcategory'
import Working from '../Landing-page/Working'
import Comments from '../Landing-page/Comments'
import Subscribe from '../Landing-page/Subscribe'

const Homepage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
    <Dreamjob/>
    <Companyy/>
    <Jobcategory></Jobcategory>
    <Working/>
    <Comments/>
    <Subscribe/>
    
   
    </div>
  )
}

export default Homepage