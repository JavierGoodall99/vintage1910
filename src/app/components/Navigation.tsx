'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  
  const tabs = [
    { name: 'Telegraph Room', href: '/telegraph-room' },
    { name: 'Scientific Dispatches', href: '/scientific-dispatches' },
    { name: 'The Exchange', href: '/the-exchange' },
    { name: 'The Weatheroscope', href: '/the-weatheroscope' }
  ];

  return (
    <nav className="vintage-filing-index my-8">
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
      <style jsx global>{`
        .vintage-filing-index {
          display: flex;
          justify-content: center;
          width: 100%;
          margin: 2rem 0;
          font-family: var(--font-heading);
        }
        
        .filing-drawer {
          display: flex;
          max-width: 900px;
          width: 100%;
          height: 3.5rem;
          background-color: #d9c7a9;
          border: 1px solid var(--ink-black);
          border-radius: 4px;
          box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.1),
                      0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          padding: 0 1px;
        }
        
        .filing-tab {
          flex: 1;
          display: flex;
          align-items: flex-end;
          position: relative;
          color: var(--ink-black);
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin: 0 2px;
          border-radius: 4px 4px 0 0;
          transform-origin: bottom center;
          cursor: pointer;
        }
        
        .filing-tab:hover, .filing-tab.active {
          transform: translateY(-8px);
          z-index: 10;
        }
        
        .filing-tab-content {
          width: 100%;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e8d5b5;
          border: 1px solid #86745f;
          border-bottom: none;
          border-radius: 6px 6px 0 0;
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -4px 8px rgba(0, 0, 0, 0.1),
            0 -1px 3px rgba(0, 0, 0, 0.2);
          position: relative;
          padding: 0 0.5rem;
          text-align: center;
        }
        
        .filing-tab-content::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          height: 5px;
          background-color: #d3c0a0;
          border-radius: 50%;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
        }
        
        .tab-text {
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
          color: #463c30;
          line-height: 1;
          position: relative;
          z-index: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        @media (max-width: 768px) {
          .filing-drawer {
            flex-direction: column;
            height: auto;
            padding: 1px 0;
          }
          
          .filing-tab {
            margin: 2px 0;
            border-radius: 0 4px 4px 0;
          }
          
          .filing-tab:hover, .filing-tab.active {
            transform: translateX(8px);
          }
          
          .filing-tab-content {
            border-radius: 0 6px 6px 0;
            border-bottom: 1px solid #86745f;
            border-left: none;
            height: 2rem;
          }
          
          .filing-tab-content::after {
            left: 0;
            top: 5%;
            width: 5px;
            height: 90%;
            border-radius: 50%;
          }
        }
      `}</style>
    </nav>
  );
}