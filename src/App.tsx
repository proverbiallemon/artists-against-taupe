import React from 'react';
import Header from './components/header';
import WhatWeStandFor from './components/WhatWeStandFor';
import OurColorfulCredo from './components/OurColorfulCredo';
import Revolutionaries from './components/Revolutionaries';
import Resources from './components/Resources';
// import ContactForm from './components/ContactForm';
import './App.css'; // Ensure the global CSS is applied

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <WhatWeStandFor />
        <OurColorfulCredo />
        <Revolutionaries />
        <Resources />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
