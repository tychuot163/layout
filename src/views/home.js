import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppWorks from '../components/home/works';
import AppFaq from '../components/home/crierial';
import AppCharacter from '../components/home/character';
import AppGallery from '../components/home/gallery/gallery';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppGallery />
      <AppFaq/>
      <AppWorks/>
      <AppCharacter />
    </div>
  );
}

export default AppHome;