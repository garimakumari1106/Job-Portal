import React from 'react'
import { Divider, Group,Text } from '@mantine/core';
import { IconClockHour9 } from '@tabler/icons-react';

import { IconBookmark } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
const Jobscard = (props:any) => {
    const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "New York",
      package: "32 LPA",
      postedDaysAgo: 12,
      description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
    },
    {
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert",
      jobType: "Part-Time",
      location: "San Francisco",
      package: "40 LPA",
      postedDaysAgo: 5,
      description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
    },
    {
      jobTitle: "Product Designer",
      company: "Microsoft",
      applicants: 58,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Remote",
      package: "35 LPA",
      postedDaysAgo: 4,
      description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
    },
    {
      jobTitle: "Product Designer",
      company: "Adobe",
      applicants: 23,
      experience: "Expert",
      jobType: "Part-Time",
      location: "Toronto",
      package: "33 LPA",
      postedDaysAgo: 22,
      description: "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with our team to design features that make our platform more engaging and user-friendly. This role is perfect for experienced designers looking for flexible work hours."
    },
    {
      jobTitle: "Backend Developer",
      company: "Google",
      applicants: 21,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Bangalore",
      package: "38 LPA",
      postedDaysAgo: 8,
      description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
    },
    {
      jobTitle: "SMM Manager",
      company: "Spotify",
      applicants: 73,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Delhi",
      package: "34 LPA",
      postedDaysAgo: 8,
      description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth. This role is ideal for creative marketers with a passion for music."
    },
    {
      jobTitle: "Frontend Developer",
      company: "Amazon",
      applicants: 50,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Seattle",
      package: "36 LPA",
      postedDaysAgo: 10,
      description: "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications."
    },
    {
      jobTitle: "iOS Developer",
      company: "Apple",
      applicants: 30,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Cupertino",
      package: "42 LPA",
      postedDaysAgo: 7,
      description: "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications for iOS devices, ensuring high performance and an exceptional user experience."
    }
  ];
  return (
    <Link to ="/jobs" className='flex flex-wrap justify-center p-8 gap-20'>
        {
            jobList.map((data,index)=>  <div key={index} className='bg-mine-shaft-900 p-6 w-96 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow:mine-shaft-600 !hover:border-5px'>
    <div className='flex  gap-7 items-center justify-between '>
        <div className=' flex gap-5 items-center'>
            <div className='bg-mine-shaft-700 p-2'><img height="40px" width="40px" src={`/${data.company}.png`} alt="" /></div>
            <div>
                <div className='text-md  mb-5 font-semibold'>{data.jobTitle}</div>
                <div className='text-xs '>{data.company} &#x2022; {data.applicants} Applicants </div>
            </div>
        </div>
        <div><IconBookmark className='text-mine-shaft-300 hover:cursor-pointer' stroke={2} /></div>
    </div>
    <div className='flex mt-3 gap-4 [&>div]:hover'>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.experience}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.jobType}</div>
        <div className='bg-mine-shaft-700 p-1 rounded-lg text-sm px-2 text-mine-shaft-bright-sun-500'>{data.location}</div>
    </div>
    <div className='p-2 text-xs !text-mine-shaft-300 text-justify'> <Text lineClamp={2}>{<> {data.description}
</>}
    </Text>                    <Divider    size="xl" mx="xs" my="5" />
</div>
    
    <div className='flex justify-between px-4'>
        <div className='font-semibold'>&#8377;{data.package}</div>
        <div className='flex items-center text-xs text-mine-shaft-200'><IconClockHour9 stroke={1.5} />Posted {data.postedDaysAgo} Days Ago</div>
    </div>
    </div>)
        }
    </Link>
  
  )
}

export default Jobscard
