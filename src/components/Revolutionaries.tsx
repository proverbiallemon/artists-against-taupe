import React from 'react';
import Slideshow from './Slideshow'; // Ensure this path is correct based on your file structure
import crewImage from '/images/thecrew/crew.webp'; // Adjust the path if necessary

const images = [
  '/images/carousel3/Car3.1.webp',
  '/images/carousel3/Car3.2.webp',
  '/images/carousel3/Car3.3.webp',
  '/images/carousel3/Car3.4.webp',
  '/images/carousel3/Car3.5.webp',
];

const Revolutionaries: React.FC = () => {
  return (
    <section id="revolutionaries">
       <div className="container revolutionaries-content">
        <div className="text-content">
          <h2>The Revolutionaries</h2>
          <p>
            35 artists and growing: 
            <a href="https://www.tartackerart.com/"> Tiffany Ackerman</a>, 
            <a href="https://www.instagram.com/beysco/?hl=en"> Jackie Almanza</a>, 
            <a href="https://www.hannahfitz.com/"> Hannah Fitzgerald</a>, 
            Oliver Penna, 
            Lily Westfall, 
            Amanda Boals, 
            Matthew Gotth-Olsen, 
            Virginia Gotth-Olsen, 
            <a href="https://www.instagram.com/icequeenalchemy/"> Jamie Ice</a>, 
            <a href="https://linktr.ee/iamryancase"> Ryan Case</a>, 
            <a href="https://www.instagram.com/whitbird/"> Whitney Arnold</a>, 
            <a href="https://www.whitneyolsen.com/"> Whitney Olsen</a>, 
            Elizabeth Blandford, 
            <a href="https://www.instagram.com/harildkylerarts/"> Aril Ferrara</a>, 
            Bricce Ferrara, 
            <a href="https://www.instagram.com/alexsublett_tattoo/?hl=en"> Alex Sublett</a>, 
            <a href="https://www.instagram.com/parchmentpossum/?hl=en"> Sydney Givens</a>, 
            Karen Axmaker, 
            Sir Panda, 
            <a href="https://www.instagram.com/parchmentpossum/?hl=en"> Kayla Lewis</a>, 
            <a href="https://www.instagram.com/scott_shuffitt/"> Scott Shuffit</a>, 
            <a href="https://tattoosalvation.com/?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQvQ7FfxtqLBvd8B3DbqK0IJ8cFzP0kqJnB4cmHBPm6JoAdvzmf6xcMaAm14EALw_wcB"> Adam Potts</a>, 
            <a href="https://palemoontattoo.com/"> Ryan Rumsey</a>, 
            <a href="https://www.instagram.com/alexrumseyart/?hl=en"> Alex Rumsey</a>, 
            Meagan Honnaker, 
            <a href="https://www.instagram.com/dirtyhandstudios/?hl=en"> Dirty Hands Studios</a>, 
            <a href="https://www.instagram.com/harildkylerarts/"> Harild Kyler Arts</a>, 
            <a href="https://www.instagram.com/brittania25/?hl=en"> Bonnie Westfield</a>, 
            <a href="https://www.instagram.com/inkydragon/?hl=en"> Sarah Tidwell</a>, 
            <a href="https://www.instagram.com/officialtonevallejo/?hl=en"> Tone Vallejo</a>, 
            <a href="https://www.instagram.com/jem_doesart/?hl=en"> JEM</a>, 
            <a href="https://www.instagram.com/drewby9000/?hl=en"> Andrew Preston</a>, 
            <a href="https://www.instagram.com/damonpaints/?hl=en"> Damon Thompson</a>, 
            <a href="https://www.instagram.com/moxi.creativelab/"> Moxxi</a>, 
            Christina Gutowski, 
            <a href="https://louisvilleunfair.org/"> Louisville Unfair</a>, 
            <a href="https://www.instagram.com/heavyvellum/"> Heavy Vellum</a>, 
            <a href="https://www.instagram.com/corey_herbert87/"> Corey Muffin Armstrong</a>,
            Eric Niederstadt,
            <a href="https://www.instagram.com/proverbiallemon/"> Pocket Bear</a>
          </p>
          
          {/* Slideshow Component */}
          <Slideshow images={images} />
        </div>
        <div className="image-content">
          <img src={crewImage} alt="The crew" />
          <p> <strong>three bad sqwarls</strong> </p>
        </div>
      </div>
    </section>
  );
}

export default Revolutionaries;
