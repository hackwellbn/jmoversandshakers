import React from 'react';
import Hero from './Layouts/Hero/Hero'
import Features from './Layouts/Features/Features'
import Process from './Layouts/Process/Process'
import Portfolio from './Layouts/Portfolio/Portfolio'
import HomeSection from './Layouts/HomeSection/HomeSection'
import MissionValues from './Layouts/MissionValues/MissionValues'
import Subsection from './Layouts/Subsection/Subsection'
import Explanation from './Layouts/Explanation/Explanation'
import Counter from './Layouts/Counter/Counter'
import Partners from './Layouts/Partners/Partners'
import FAQS  from './Layouts/FAQS/FAQS'
import './Home.css';

const Home = () => {
  return (
    <div className="home">
<Hero />
<Features />
<Counter />
<Process/>
<Portfolio />
<HomeSection />
<MissionValues />
<Subsection />
<Explanation/>
<FAQS />
<Partners />
    </div>
  );
}

export default Home;
