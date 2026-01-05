import React from 'react';
import SkilsItem from './SkilsItem';
import SkilsLanguage from './SkilsLanguage';

const Skils = () => {
  return <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
    <h1 className='heading'>
        Education & <span className='text-yellow-400'>Skill</span>
    </h1>
    <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkilsItem title="SMA Bunda Hati Kudus" year="2019 - 2022 " explain="I am a graduate of Bunda Hati Kudus High School, class of 49, located in Grogol, West Jakarta. Where I specialized in the science track. During my time at the school, I actively contributed  to the school community by serving in the student council (MPK) as the head of the extracurricular division." />
            {/* <SkilsItem title="React Developer" year="2014 - 2018 " explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum explicabo assumenda ex beatae exercitationem aut provident deserunt, maxime quam earum, architecto, omnis nobis non minus eum vel cumque natus."/> */}
            <SkilsLanguage skill1='html' skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
        </div>
        <div>
            <SkilsItem title="Bina Nusantara University" year="2022 - Present " explain="I am part of Binusian 26, majoring in Computer Science, and currently in my seventh semester with a GPA of 3.79. I have been actively involved in several student organizations and volunteer activities, which have enriched my university experience and strengthened my teamwork, leadership, and social responsibility skills."/>
            {/* <SkilsItem title="React Developer" year="2014 - 2018 " explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum explicabo assumenda ex beatae exercitationem aut provident deserunt, maxime quam earum, architecto, omnis nobis non minus eum vel cumque natus."/> */}
            <SkilsLanguage skill1='React' skill2="Python" skill3="SQL" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]" />
        </div>
    </div>
  </div>;
};

export default Skils;