import { Metadata } from 'next';
import JournalFeed from '../../components/JournalFeed';

export const metadata: Metadata = {
  title: 'Scientific Journal | Vintage Tailwind',
  description: 'An Edwardian-era scientific journal styled using Tailwind CSS',
};

export default function JournalPage() {
  return (
    <div className="journal-container">
      <header className="journal-header">
        <div className="journal-volume">Volume XVIII • No. 3 • May 1, 1925</div>
        <h1>The Royal Society Proceedings</h1>
        <div className="journal-subtitle">A Quarterly Collection of Scientific Enquiry</div>
      </header>
      
      <JournalFeed />
      
      <footer className="journal-footer">
        <p>Published by the Royal Society of Sciences • London, England • Est. 1660</p>
      </footer>
    </div>
  );
}