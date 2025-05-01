'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [hoverTab, setHoverTab] = useState<number | null>(null);
  const pathname = usePathname();
  
  const tabs = [
    { name: 'News', href: '/' },
    { name: 'Scientific Journal', href: '/journal' },
    { name: 'Invention Timeline', href: '/timeline' },
    { name: 'Telegraph Room', href: '/telegraph-room' },
    { name: 'Thought Compendium', href: '/thought-index' },
    { name: 'Emporium', href: '/shop' }
  ];

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href) || false;
  };

  return (
    <nav className="vintage-filing-index">
      <div className="filing-drawer">
        {tabs.map((tab, index) => (
          <Link 
            key={index} 
            href={tab.href}
            className={`filing-tab ${isActive(tab.href) ? 'active' : ''} ${hoverTab === index ? 'hover' : ''}`}
            onMouseOver={() => setHoverTab(index)}
            onMouseOut={() => setHoverTab(null)}
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