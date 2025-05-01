'use client';

import { useState } from 'react';
import styles from './InventionTimeline.module.css';
import Image from 'next/image';

// Define the type for our invention data
interface Invention {
  id: number;
  year: number;
  title: string;
  inventor: string;
  illustration: string;
  description: string;
  purpose: string;
  mechanism: string;
  impact: string;
}

// Sample invention data
const inventions: Invention[] = [
  {
    id: 1,
    year: 1887,
    title: "The Aetheric Thought-Radio",
    inventor: "Nikolai Tesla",
    illustration: "/AethericThought-Radio.png",
    description: "A remarkable device capable of transmitting thoughts through aetheric waves, allowing for telepathic communication between individuals separated by vast distances.",
    purpose: "Created to establish communication where traditional methods fail, particularly in remote expeditions and diplomatic missions requiring absolute secrecy.",
    mechanism: "The apparatus contains a sensitive receiver of phosphor-bronze and platinum that detects minute electrical currents produced by human thought. These signals are amplified by Tesla's patented magnifying transmitter and broadcast via aetheric waves to the receiving apparatus.",
    impact: "While initially met with skepticism, the Thought-Radio found limited use among explorers in the Arctic Circle before production ceased in 1891 due to unpredictable transmissions and occasional cross-talk with dreams."
  },
  {
    id: 2,
    year: 1899,
    title: "The Chronometric Aether Stabilizer",
    inventor: "Sir William Thomson",
    illustration: "/Chronometric-Aether-Stabilizer.png",
    description: "An ingenious device that manipulates the temporal flow of aether particles, creating stable fields where time proceeds at a precisely regulated pace.",
    purpose: "Developed to establish standardized time measurements across the Empire and to facilitate synchronized operations for the Royal Navy across disparate longitudes.",
    mechanism: "The apparatus utilizes precisely calibrated quartz oscillators suspended within an electromagnetic field. When the contained aether is excited by electrical current, the oscillations synchronize to create a stable reference for temporal measurement.",
    impact: "Widely adopted by astronomical observatories and navigational authorities, the Stabilizer greatly improved the precision of longitude calculations and railway schedules throughout the Empire."
  },
  {
    id: 3,
    year: 1905,
    title: "The Heliotropic Self-Adjusting Observatory",
    inventor: "Lady Adelaide Worthington",
    illustration: "/Heliotropic.png",
    description: "A revolutionary astronomical instrument that automatically tracks celestial bodies with unprecedented precision throughout the day without the need for manual adjustment.",
    purpose: "Designed to enable continuous observation of astronomical phenomena, particularly solar activity, without the constant presence of an operator.",
    mechanism: "The device employs a system of photosensitive selenium cells arranged in opposition. When illumination becomes uneven, electrical relays activate a clockwork mechanism that adjusts the position of the observation platform until balance is restored.",
    impact: "Lady Worthington's invention revolutionized solar astronomy, leading to the discovery of several previously unobserved solar phenomena and earned her the prestigious Copley Medal from the Royal Society."
  },
  {
    id: 4,
    year: 1911,
    title: "The Atmospheric Memory Extractor",
    inventor: "Professor Archibald Thornfield",
    illustration: "/Atmospheric-Memory-Extractor.png",
    description: "A controversial apparatus that supposedly captures residual emotional and mental impressions left in the atmosphere of a location, rendering them visible through a specialized projection system.",
    purpose: "Created to assist in criminal investigations by revealing past events that occurred at crime scenes and to preserve historical moments for posterity.",
    mechanism: "The device collects ambient air through an intricate series of brass and glass chambers. These samples are subjected to electrical currents and chemical reagents, causing any captured mental residue to manifest as visible light patterns on a photographic plate.",
    impact: "Initially embraced by several police departments and used in at least twelve murder investigations. Later fell into disrepute after notable failures and accusations of manipulated results."
  },
  {
    id: 5,
    year: 1919,
    title: "The Phrenological Automation Engine",
    inventor: "Dr. Elias Wintersmith",
    illustration: "/Phrenological-Automation-Engine.png",
    description: "A remarkable calculating device that uses principles of phrenology to match individual cranial measurements with optimal career and educational paths.",
    purpose: "Designed to scientifically determine the most suitable occupation for any individual based on physiological characteristics, thus maximizing efficiency in industrial and academic placement.",
    mechanism: "The machine employs a series of precision calipers connected to an intricate computational system of gears and levers. After taking twenty-seven distinct skull measurements, the device performs complex calculations to produce personality and aptitude assessments.",
    impact: "Briefly popular among progressive educational institutions and forward-thinking corporations before being discredited along with phrenological science in the early 1920s."
  }
];

export default function InventionTimeline() {
  const [selectedInvention, setSelectedInvention] = useState<Invention | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNodeClick = (invention: Invention) => {
    setSelectedInvention(invention);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.scrollContainer}>
        <div className={styles.timeline}>
          <div className={styles.timelineTrack}></div>
          
          {inventions.map((invention) => (
            <div 
              key={invention.id} 
              className={styles.timelineNode}
              onClick={() => handleNodeClick(invention)}
            >
              <div className={styles.brassNode}>
                {invention.id}
              </div>
              <div className={styles.nodeYear}>
                {invention.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patent Overlay */}
      <div className={`${styles.patentOverlay} ${isModalOpen ? styles.patentOverlayVisible : ''}`}>
        <div className={styles.patentContent}>
          {selectedInvention && (
            <>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              
              <div className={styles.patentHeader}>
                <div className={styles.patentTitle}>{selectedInvention.title}</div>
                <div className={styles.patentInventor}>Invented by {selectedInvention.inventor}</div>
                <div className={styles.patentDate}>Patented {selectedInvention.year}</div>
              </div>
              
              <div className={styles.patentBody}>
                <div className={styles.patentIllustration}>
                  <div className={styles.illustrationContainer}>
                    <Image 
                      src={selectedInvention.illustration} 
                      alt={`Illustration of ${selectedInvention.title}`}
                      className={styles.illustrationImage}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className={styles.illustrationCaption}>
                    Fig. 1: Technical illustration of {selectedInvention.title}
                  </div>
                </div>
                
                <div className={styles.patentDescription}>
                  <div className={styles.descriptionSection}>
                    <div className={styles.descriptionHeading}>Description</div>
                    <div className={styles.descriptionText}>{selectedInvention.description}</div>
                  </div>
                  
                  <div className={styles.descriptionSection}>
                    <div className={styles.descriptionHeading}>Purpose</div>
                    <div className={styles.descriptionText}>{selectedInvention.purpose}</div>
                  </div>
                  
                  <div className={styles.descriptionSection}>
                    <div className={styles.descriptionHeading}>Mechanism</div>
                    <div className={styles.descriptionText}>{selectedInvention.mechanism}</div>
                  </div>
                  
                  <div className={styles.descriptionSection}>
                    <div className={styles.descriptionHeading}>Historical Impact</div>
                    <div className={styles.descriptionText}>{selectedInvention.impact}</div>
                  </div>
                </div>
              </div>
              
              <div className={styles.patentFooter}>
                Imperial Patent Office • Great Britain • {selectedInvention.year}
              </div>

              <div className={styles.patentStamp}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#85754d" strokeWidth="2" />
                  <text x="50" y="35" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#85754d">IMPERIAL</text>
                  <text x="50" y="50" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#85754d">PATENT</text>
                  <text x="50" y="65" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#85754d">APPROVED</text>
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}