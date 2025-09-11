import React from 'react'
import Sort from '../Findjobs/Sort'
import Talentcars from './Talentcars'
import { talents } from './TalentData'

const Findtalent = () => {
  return (<div className='m-6'>
    <div className='flex text-3xl font-semibold justify-between m-6'>Talents 
        <div><Sort/></div>
        
    </div>
    <Talentcars {...talents}/></div>
    
  )
}

export default Findtalent