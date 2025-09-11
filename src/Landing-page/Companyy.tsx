import React from 'react'
import Marquee from "react-fast-marquee";


const Companyy = () => {
  return (
    <div className=''>
        <div className='font-semibold flex justify-center mt-40 text-5xl text-mine-shaft-100 py-5'>
            <span>Trusted By</span> <span className='text-mine-shaft-bright-sun-500'> 
            <span className='text-mine-shaft-950'>.</span>1000+</span><span className='bg-mine-shaft-950'>.</span>
            <span>Companies</span></div>
        <Marquee className='p-4 '>
            <div>
                <img src="/Adobe.png" alt=""  className="imgmarquee"/>
            </div>
            <div>
                <img src="/Google.png" alt=""  className="imgmarquee"/>
            </div>
            <div>
                <img src="/Meta.png" alt=""  className="imgmarquee"/>
            </div>
            <div>
                <img src="/netflix.png" alt="" className="imgmarquee"/>
            </div>
            <div>
                <img src="/prime.png" alt="" className="imgmarquee"/>
            </div>
            <div>
                <img src="/Amazon.png" alt="" className="imgmarquee"/>
            </div>
            <div>
                <img src="/Spotify.png" alt="" className="imgmarquee"/>
            </div>
            <div>
                <img src="/hulu.png" alt="" className="imgmarquee"/>
            </div>
             <div>
                <img src="/Microsoft.png" alt="" className="imgmarquee"/>
            </div>
        </Marquee>
    </div>
  )
}

export default Companyy