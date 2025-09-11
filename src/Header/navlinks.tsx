import { Link } from "react-router-dom";


const navlinks = () => {
const links=[{name:"Find job",url:"/find-job"},
  {name:"Find talent",url:"/find-talent"},
  {name:"Post job",url:"/postedjob-page"},
  {name:"About",url:"/about"},
    {name:"Job-History",url:"/job-history"},
    {name:"Sign-up",url:"/signup"},

]
  return (
        <div className='text-white flex  text-2xl gap-12 '>
      {
      links.map((link,index)=> <Link key={index} to={link.url} >{link.name}</Link>)}
    </div>
  )
}

export default navlinks