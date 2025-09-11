import './App.css';

import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Findjobs from './pages/Findjobs';
import Footer from './Footer/Footer'
import Findtalentpage from './pages/Findtalentpage';
import Talentprofilepage from './pages/Talentprofilepage';
import Postjobpage from './pages/Postjobpage';
import Jobdescpage from './pages/Jobdescpage';
import Applyjobpage from './pages/Applyjobpage';
import Companypage from './pages/Companypage';
import Postedjobpage from './pages/Postedjobpage';
import Jobhistorypage from './pages/Jobhistorypage';
import Signuppage from './pages/Signuppage';
import Profilepage from './pages/Profilepage';


function App() {
 


  return (
  <MantineProvider   defaultColorScheme="dark"
      theme={{
        primaryColor: 'yellow',
        fontFamily: 'Inter, sans-serif',}}><div  className='bg-mine-shaft-950 defaultColorScheme-dark  min-h-[100vh]'>
    <BrowserRouter >
        <Header/>
   
    <Routes>
     <Route path="/find-job" element={<Findjobs/>}/>
          <Route path="/find-talent" element={<Findtalentpage/>}/>
          <Route path="/talent-profile" element={<Talentprofilepage/>}/>
          <Route path="/post-job" element={<Postjobpage/>}/>
          <Route path="/apply-jobs" element={<Applyjobpage/>}/>
          <Route path="/company-page" element={<Companypage/>}/>
                    <Route path="/postedjob-page" element={<Postedjobpage/>}/>
          <Route path="/job-history" element={<Jobhistorypage/>}/>
          <Route path="/signup" element={<Signuppage/>}/>
          <Route path="/login" element={<Signuppage/>}/>
          <Route path="/profile" element={<Profilepage/>}/>


    <Route path="*" element={<Homepage/>}/>
 </Routes> <Footer /></BrowserRouter></div>
    </MantineProvider>
  );          <Route path="/jobs" element={<Jobdescpage/>}/>

}

export default App;

