'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  
  const tabs = [
    { name: 'News', href: '/' },
    { name: 'Emporium', href: '/shop' },
    { name: 'Telegraph Room', href: '/telegraph-room' },
    // { name: 'The Weatheroscope', href: '/the-weatheroscope' },
    { name: 'Invention Timeline', href: '/timeline' },
    { name: 'Scientific Journal', href: '/journal' },
    { name: 'Thought Compendium', href: '/thought-index' }
  ];

  return (
    <nav className="vintage-filing-index">
      <div className="filing-drawer">
        {tabs.map((tab, index) => (
          <Link 
            key={index} 
            href={tab.href}
            className={`filing-tab ${activeTab === index ? 'active' : ''}`}
            onMouseOver={() => setActiveTab(index)}
            onMouseOut={() => setActiveTab(null)}
          >
            <div className="filing-tab-content">
              <span className="tab-text">{tab.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}