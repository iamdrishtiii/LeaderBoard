import React from 'react';
import Navbar from './Component/Navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Score from './pages/Score';
import PopularPlayer from './pages/PopularPlayer';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='relative min-h-[100vh] max-w-[1600px] mx-auto'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route path="" element={<A/>} /> */}
        <Route path="" element={<Home/>} />
        <Route path="/dashboard" element={<Home/>}  />
        <Route path="/score" element={<Score/>}  />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/popularplayer" element={<PopularPlayer/>} />
    </Routes>
    <Footer/>
    </BrowserRouter> 
    </div>
  );
};

export default App;


// 1.	Create an application using React and Redux, material UI/tailwind. without redux toolkit and using vite
// Create a leader board score website. Website should have information of dashboard, about, contact, score, popular player data.
// On dashboard page, capture input of score and name of player. On submit, display data in score page. 
// Add carousel, media, images, videos, content inside dashboard, about, contact page.


// Landing Page/Home
// Create a form and add fields (Player name, score) in the form, add Form Validation
// After submitting the form, give notification score added successfully.(modal)


// Score Page
// Display all the score data (cards) added by the admin, admin should be able to delete the record. Add search functionality


// Popular player
// Will fetch data from a third-party API and display it on page.


// Contact Us Page
// Add 3 Cards for Location, Contact Number, Email Id, contact us form


// About Us Page
// Here, add media and content, carousel, images, video.
