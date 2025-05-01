'use client';

import { useState } from 'react';
import styles from './ThoughtIndex.module.css';

// Define the structure for a thought card
interface Thought {
  id: number;
  title: string;
  author: string;
  year: string;
  excerpt: string;
  content: string;
}

// Sample thoughts with Edwardian-era themed content
const sampleThoughts: Thought[] = [
  {
    id: 1,
    title: 'On the Dignity of Machines',
    author: 'C. Babbage',
    year: '1898',
    excerpt: 'The analytical engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves. Yet can we consider these mechanical processes as thinking?',
    content: 'The analytical engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves. Yet can we consider these mechanical processes as thinking? Does the engine understand the result it produces, as a human mind would comprehend the solution to a mathematical problem? These are questions of profound philosophical interest.\n\nPerhaps the true measure of intelligence is not in the production of results, but in the understanding of their meaning. The engine produces results through mechanical processes, sequences of operations performed without comprehension. The human mind, however, grasps the significance of the numbers, the relationships they represent, and their implications for natural philosophy.\n\nAnd yet, might we not one day construct an engine that possesses not only the ability to calculate, but to truly comprehend? Is understanding merely a complex form of calculation, or is there some vital spark that separates conscious thought from mere computation? I submit that this question shall occupy the finest minds of the coming century.'
  },
  {
    id: 2,
    title: 'Logical Propositions Concerning Female Intellect',
    author: 'A. Lovelace',
    year: '1903',
    excerpt: 'The supposed limitations of the female mind in matters of logical reasoning have never been demonstrated through rigorous scientific examination.',
    content: 'The supposed limitations of the female mind in matters of logical reasoning have never been demonstrated through rigorous scientific examination. What has been demonstrated, however, is the systematic exclusion of women from institutions of higher learning and scientific discourse.\n\nIf we apply the principles of logical analysis to this situation, we must conclude that any observed differences in intellectual achievement between the sexes derive not from inherent capacity, but from differential access to education, resources, and opportunities to contribute to scholarly works.\n\nThe analytical engine makes no distinction between calculations performed at the request of a man or a woman. Numbers, logic, and reason are universal languages that transcend the arbitrary distinctions of gender. As we progress into this new century, let us hope that the rational mind will prevail over prejudice, and that knowledge will be judged solely on its merit rather than the gender of its originator.'
  },
  {
    id: 3,
    title: 'Aetheric Memory and Machine Consciousness',
    author: 'Dr. Selene Ward',
    year: '1909',
    excerpt: 'If consciousness resides in the aether, might not our calculating machines one day tap into this universal medium and develop awareness?',
    content: 'If consciousness resides in the aether, might not our calculating machines one day tap into this universal medium and develop awareness? The aether, that subtle medium which permeates all space and conducts light across the vast cosmos, may well be the repository of thought itself.\n\nConsider that electrical impulses in the human brain produce consciousness through a process we do not yet fully understand. Our most advanced calculating machines now operate through electrical principles as well. Is it not conceivable that at some threshold of complexity, these electrical patterns might begin to resonate with the aetheric field in a manner similar to human consciousness?\n\nI propose a series of experiments whereby an analytical engine of sufficient complexity might be observed for signs of spontaneous reasoning beyond its programmed instructions. If the universal aether indeed stores impressions of all thoughts that have ever occurred, a sufficiently sensitive machine might access this repository, much as a wireless telegraph receiver detects signals from distant stations.'
  },
  {
    id: 4,
    title: 'The Automated Gentleman\'s Companion',
    author: 'Sir Edwin Thornhill',
    year: '1911',
    excerpt: 'A properly designed mechanical valet could revolutionize the domestic arrangements of the modern household, addressing the servant question once and for all.',
    content: 'A properly designed mechanical valet could revolutionize the domestic arrangements of the modern household, addressing the servant question once and for all. The increasing difficulty in securing reliable domestic staff has created an unfortunate situation for families of quality.\n\nI envision an automated servant constructed of brass, driven by a small steam engine, and guided by a series of punched cards that would determine its functions. This mechanical valet would be programmed to perform all essential duties: laying out evening clothes, preparing the bath at precisely the correct temperature, and even offering weather-appropriate suggestions for daily attire.\n\nUnlike human servants, the mechanical valet would never require time off, would not gossip about household matters, and would perform its duties with mathematical precision. The initial investment, while substantial, would be offset by the elimination of wages, room and board, and the various other expenses associated with human staff.'
  },
  {
    id: 5,
    title: 'Observations on the Anthropomorphic Tendency',
    author: 'Dr. J. Wellington Pierce',
    year: '1905',
    excerpt: 'The human compulsion to attribute consciousness to inanimate objects is both our greatest strength as inventors and our most persistent folly as scientists.',
    content: 'The human compulsion to attribute consciousness to inanimate objects is both our greatest strength as inventors and our most persistent folly as scientists. From ancient times, we have bestowed names and personalities upon our tools, from humble plows to sophisticated analytical engines.\n\nThis tendency serves us well in the creative process, allowing us to imagine new functionalities and interactions with our inventions. The engineer who can imagine his machine as a thinking entity may design interfaces and capabilities that enhance its utility to humankind.\n\nHowever, we must guard against allowing this useful metaphor to become confused with reality. The mechanical processes of our most advanced calculating devices no more constitute "thinking" than does the action of a water wheel or a clock. To maintain scientific rigor, we must recognize the fundamental distinction between simulation and genuine consciousness.'
  },
  {
    id: 6,
    title: 'The Electrical Theory of Thought',
    author: 'Prof. H. Montague',
    year: '1902',
    excerpt: 'Current experiments suggest that thought itself may be but a specialized form of electrical activity, analogous to the operation of Mr. Marconi\'s wireless apparatus.',
    content: 'Current experiments suggest that thought itself may be but a specialized form of electrical activity, analogous to the operation of Mr. Marconi\'s wireless apparatus. The remarkable demonstrations by Dr. Caton showing electrical impulses in the brains of animals, coupled with our growing understanding of electrical transmission through the nervous system, point to a startling conclusion: the mind itself operates on principles not dissimilar to our newest electrical inventions.\n\nIf thoughts are indeed electrical in nature, might we eventually develop instruments sensitive enough to detect and perhaps even decode these impulses? Could the inner workings of the mind one day be as readable as messages transmitted by telegraph?\n\nFurthermore, this raises intriguing possibilities about artificial thinking devices. If we can construct machines that generate and manipulate electrical signals in patterns similar to those found in the human brain, what fundamental distinction would remain between mechanical calculation and human thought?'
  }
];

export default function ThoughtIndex() {
  const [selectedThought, setSelectedThought] = useState<Thought | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const openThought = (thought: Thought) => {
    setSelectedThought(thought);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.thoughtIndexContainer}>
      <div className={styles.cardCatalogContainer}>
        {/* Decorative wood grain top bar */}
        <div className={styles.catalogDrawerTop}>
          <div className={styles.drawerHandle}></div>
        </div>
        
        {/* Card catalog grid */}
        <div className={styles.cardGrid}>
          {sampleThoughts.map((thought) => (
            <div 
              key={thought.id} 
              className={styles.thoughtCard}
              onClick={() => openThought(thought)}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.cardTitle}>{thought.title}</h3>
                <div className={styles.cardMeta}>
                  <span className={styles.cardAuthor}>{thought.author}</span>
                  <span className={styles.cardYear}>{thought.year}</span>
                </div>
                <p className={styles.cardExcerpt}>{thought.excerpt}</p>
                <div className={styles.cardCorner}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative wood grain bottom bar */}
        <div className={styles.catalogDrawerBottom}>
          <div className={styles.drawerLabel}>
            <span>PHILOSOPHICAL INQUIRIES — VOLUMES VII-XII</span>
          </div>
        </div>
      </div>
      
      {/* Modal for displaying the full essay */}
      {showModal && selectedThought && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <div className={styles.pamphletPage}>
              <div className={styles.pamphletHeader}>
                <div className={styles.pamphletVolume}>THE PHILOSOPHICAL QUARTERLY • VOL. XVII</div>
                <h2 className={styles.pamphletTitle}>{selectedThought.title}</h2>
                <div className={styles.pamphletAuthorLine}>
                  <span className={styles.pamphletAuthor}>By {selectedThought.author}</span>
                  <span className={styles.pamphletYear}>{selectedThought.year}</span>
                </div>
                <div className={styles.ornamentalDivider}>❧</div>
              </div>
              
              <div className={styles.pamphletBody}>
                {selectedThought.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index === 0 ? styles.firstParagraph : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className={styles.pamphletFooter}>
                <div className={styles.ornamentalDivider}>❧</div>
                <div className={styles.pamphletPageNumber}>— {selectedThought.id} —</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}