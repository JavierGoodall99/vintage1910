import { Metadata } from 'next';
import InventionTimeline from '../../components/InventionTimeline';

export const metadata: Metadata = {
  title: 'Edwardian Inventions Timeline | Vintage Tailwind',
  description: 'An Edwardian-style timeline showcasing fictional Victorian-era inventions',
};

export default function TimelinePage() {
  return (
    <div className="journal-container">
      <header className="journal-header">
        <div className="journal-volume">Imperial Patent Office • Crown Registry</div>
        <h1>Notable Inventions of the Modern Era</h1>
        <div className="journal-subtitle">A Chronological Survey of Remarkable Scientific Endeavours</div>
      </header>
      
      <section>
        <p className="newspaper-dropcap">
          This historical record documents the most significant inventions of our era, 
          each representing a leap forward in human ingenuity and scientific understanding. 
          The timeline below presents these marvels in chronological order, with detailed 
          patent information available upon selection. These innovations reflect the 
          boundless creativity of the Empire&apos;s greatest minds and the inexorable march 
          of progress in our modern age of scientific wonder.
        </p>

        <InventionTimeline />
      </section>
      
      <footer className="journal-footer">
        <p>Published by the Royal Patent Office • London, England • Est. 1852</p>
      </footer>
    </div>
  );
}