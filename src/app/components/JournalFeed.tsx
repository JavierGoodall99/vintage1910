import React from 'react';
import JournalArticle from './JournalArticle';

// Sample journal articles data
const articles = [
  {
    id: 1,
    date: 'April 15, 1925',
    title: 'On the Quantum Theory of Radiation',
    author: 'Dr. Albert Einstein',
    institution: 'Berlin Academy of Sciences',
    content: `The wave theory of light, which operates with continuous spatial functions, has proved itself superbly in describing purely optical phenomena and will probably never be replaced by another theory. However, one should keep in mind that optical observations refer to time averages and not to instantaneous values and that, in spite of the complete confirmation of the theory of diffraction, reflection, refraction, dispersion, etc., by experiment, it is still conceivable that a theory of light which operates with continuous spatial functions may lead to contradictions with experiment when it is applied to the phenomena of the creation and conversion of light.`,
    annotation: 'Einstein challenges classical wave theory, suggesting light exhibits both wave and particle-like properties, laying groundwork for quantum mechanics.'
  },
  {
    id: 2,
    date: 'March 11, 1925',
    title: 'Preliminary Account of Radio Signal Propagation in the Upper Atmosphere',
    author: 'Sir Edward Appleton',
    institution: 'Cambridge University',
    content: `The investigation herein described provides substantial evidence for the existence of an electrically conducting layer in the upper atmosphere. By measuring the time delay between the reception of radio waves traveling along the ground and those reflected from the upper atmosphere, we have determined this reflecting layer to exist at an altitude of approximately 100 kilometers. This ionized stratum, which we propose to call the ionosphere, appears to be responsible for the propagation of radio waves around the curvature of the Earth, thus enabling long-distance wireless communication.`,
    annotation: 'Appleton\'s work confirmed the existence of the ionosphere, explaining how radio signals could travel beyond the horizon, revolutionizing telecommunications.'
  },
  {
    id: 3,
    date: 'February 23, 1925',
    title: 'Observations on Cellular Respiration in Plant Matter',
    author: 'Prof. Katherine Richardson',
    institution: 'Oxford University',
    content: `Specimens of Chlorella vulgaris were subjected to various atmospheric conditions to determine the efficiency of cellular respiration in conditions of diminished light. The plantae demonstrated remarkable adaptive capabilities when exposed to periodic illumination rather than constant brightness. Measurements of oxygen production indicated a 23% increase in respiratory efficiency when specimens were subjected to alternating periods of light and darkness compared to those kept in constant illumination of equal cumulative intensity.`,
    annotation: 'First documented evidence of improved plant respiration efficiency through intermittent light exposure rather than continuous illumination.'
  },
  {
    id: 4,
    date: 'January 7, 1925',
    title: 'Concerning the New Element Hafnium',
    author: 'Dr. Dirk Coster & Prof. Georg von Hevesy',
    institution: 'University of Copenhagen',
    content: `We present herein comprehensive spectroscopic evidence confirming the discovery of element 72, which we have named Hafnium after Hafnia, the Latin name for Copenhagen. X-ray spectroscopic analysis of zirconium ore samples revealed the characteristic emission lines predicted by Bohr's atomic theory. The chemical properties of Hafnium demonstrate its proper placement in the periodic table as a homologue of zirconium, though its atomic weight has been determined to be 178.6, higher than previously estimated.`,
    annotation: 'The discovery of hafnium (element 72) validated Bohr\'s atomic theory and filled a critical gap in Mendeleev\'s periodic table.'
  }
];

export default function JournalFeed() {
  return (
    <main className="journal-feed">
      <div className="journal-grid">
        {articles.map(article => (
          <JournalArticle 
            key={article.id} 
            date={article.date}
            title={article.title}
            author={article.author}
            institution={article.institution}
            content={article.content}
            annotation={article.annotation}
          />
        ))}
      </div>
    </main>
  );
}