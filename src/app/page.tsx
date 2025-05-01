"use client";
import React, { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState("LOCAL NEWS");

  // Content for different sections
  const newsContent = {
    "LOCAL NEWS": (
      <>
        <div className="newspaper-headline">
          <h2>AEROPLANE ALTITUDE RECORD SHATTERED</h2>
          <div className="newspaper-headline-details">
            Frenchman Ascends to Unprecedented Height of 9,840 Feet
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              The world of aviation continues to witness extraordinary feats as progress in aeronautical engineering advances at a pace that would have seemed impossible mere years ago. Yesterday afternoon, at precisely half-past three o&apos;clock, Monsieur Louis Paulhan of France ascended to the remarkable altitude of 9,840 feet in his Farman biplane, establishing a new world record and demonstrating the ever-expanding capabilities of these marvelous flying machines.
            </p>
            <p>
              The record-breaking flight took place at the Aviation Meeting at Rheims, where spectators gathered in great numbers to witness the historic achievement. Paulhan&apos;s flight lasted approximately forty-five minutes, during which he battled strong winds and near-freezing temperatures at the highest elevations.
            </p>
            <p>
              &quot;The air becomes exceedingly thin at such heights,&quot; reported Paulhan after his descent. &quot;One must be prepared for the demands such conditions place upon both machine and pilot.&quot;
            </p>
            <p>
              Aviation experts suggest this achievement opens new possibilities for the future of air travel, potentially allowing for more efficient long-distance journeys by taking advantage of more favorable wind conditions at higher altitudes.
            </p>
            <div className="newspaper-continued">Continued on Page A2, Column 4</div>
          </article>

          <article className="newspaper-article">
            <h3>LOCAL SUFFRAGIST MOVEMENT GAINS MOMENTUM</h3>
            <p>
              The campaign for women&apos;s voting rights has found renewed vigor following yesterday&apos;s well-attended rally at City Hall. More than two hundred supporters gathered to hear speeches delivered by prominent suffragists, including noted orator Mrs. Elizabeth Cady Stanton.
            </p>
            <p>
              &quot;The right to vote is fundamental to our democracy, yet half our citizens are denied this basic liberty,&quot; declared Mrs. Stanton to enthusiastic applause. &quot;We shall continue our peaceful but determined efforts until justice prevails.&quot;
            </p>
            <blockquote>
              &quot;The day will come when men will recognize woman as his peer, not only at the fireside, but in councils of the nation.&quot;
            </blockquote>
            <p>
              City officials maintained order throughout the demonstration, though several participants reported receiving hostile reactions from passers-by. Nevertheless, organizers deemed the event a success and announced plans for a larger demonstration next month.
            </p>
            <div className="newspaper-continued">Continued on Page A4, Column 1</div>
          </article>

          <article className="newspaper-article">
            <h3>TOWN HALL RENOVATION APPROVED</h3>
            <p>
              The City Council has unanimously approved funding for the long-awaited renovation of the historic Town Hall. The $45,000 project will restore the building's façade and modernize internal facilities while preserving its architectural significance.
            </p>
            <p>
              "This beloved landmark has served our community for over seven decades," remarked Mayor Thompson at yesterday's council meeting. "These improvements will ensure it continues to stand as the heart of our civic life for generations to come."
            </p>
            <p>
              Construction is scheduled to commence next month and is expected to be completed by year's end. Temporary administrative offices will be established in the Bedford Building on Main Street during the renovation period.
            </p>
            <div className="newspaper-continued">Continued on Page A3, Column 2</div>
          </article>

          <article className="newspaper-article advertisement">
            <h3 className="advert-heading">BURTON&apos;S DEPARTMENT STORE</h3>
            <p className="advert-text">
              SPRING FASHIONS NOW AVAILABLE
            </p>
            <p>
              Ladies&apos; Spring Hats from $2.95<br />
              Fine Silk Gloves at $1.50 per pair<br />
              Men&apos;s Wool Suits from $15.00<br />
              Children&apos;s Shoes from $1.25
            </p>
            <p className="advert-footer">
              MAIN STREET & FIFTH AVENUE
            </p>
          </article>
        </div>
      </>
    ),
    "INTERNATIONAL": (
      <>
        <div className="newspaper-headline">
          <h2>PEACE NEGOTIATIONS STALL IN BALKANS</h2>
          <div className="newspaper-headline-details">
            European Powers Express Concern as Tensions Rise
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              Diplomatic efforts to secure lasting peace in the Balkan region have encountered significant obstacles, according to reports from Constantinople. Yesterday's summit between Ottoman officials and representatives of Bulgaria, Serbia, and Greece concluded without resolution, casting doubt upon hopes for imminent stability in the region.
            </p>
            <p>
              "The parties remain fundamentally divided on questions of territorial boundaries and minority protections," stated British envoy Sir Arthur Nicolson, who has been observing the proceedings. "While all express desire for peace, concessions have been minimal."
            </p>
            <p>
              Foreign ministers from France, Germany, and Russia have issued a joint statement urging all parties to demonstrate "prudence and moderation" in their demands, fearing that continued discord might ignite wider hostilities.
            </p>
            <div className="newspaper-continued">Continued on Page C1, Column 3</div>
          </article>

          <article className="newspaper-article">
            <h3>GERMAN NAVAL EXPANSION CONTINUES APACE</h3>
            <p>
              The Imperial German Navy launched its newest dreadnought yesterday at Kiel, marking another milestone in Kaiser Wilhelm's ambitious naval program. The SMS Westfalen, displacing 18,900 tons, represents the latest advancement in naval architecture and firepower.
            </p>
            <p>
              British Admiralty officials have reportedly expressed concern over the rapid pace of German naval construction, which threatens to diminish Britain's traditional maritime supremacy. First Lord of the Admiralty McKenna has requested additional funding for British shipbuilding in response.
            </p>
            <p>
              Meanwhile, German officials maintain that their naval expansion serves purely defensive purposes and is commensurate with Germany's growing status as a world power with extensive colonial and commercial interests.
            </p>
            <div className="newspaper-continued">Continued on Page C2, Column 1</div>
          </article>

          <article className="newspaper-article">
            <h3>ARCHAEOLOGICAL DISCOVERY IN EGYPT STUNS EXPERTS</h3>
            <p>
              British archaeologists working near Luxor have uncovered an intact tomb believed to date from the 18th Dynasty, approximately 3,400 years ago. The expedition, led by Professor Howard Carter of the British Museum, describes the find as "extraordinarily well-preserved" and potentially of great historical significance.
            </p>
            <p>
              Initial examination has revealed numerous artifacts, including ceremonial objects, jewelry, and written papyri that may provide new insights into ancient Egyptian religious practices and daily life during the New Kingdom period.
            </p>
            <p>
              Egyptian authorities have placed the site under guard while excavation continues, with plans to eventually transfer notable items to the Cairo Museum for public exhibition.
            </p>
            <div className="newspaper-continued">Continued on Page D3, Column 2</div>
          </article>
        </div>
      </>
    ),
    "BUSINESS": (
      <>
        <div className="newspaper-headline">
          <h2>MOTORCAR SALES REACH UNPRECEDENTED HEIGHTS</h2>
          <div className="newspaper-headline-details">
            Ford Motor Company Reports 40% Increase Over Previous Year
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              The Ford Motor Company announced yesterday that sales of their Model T automobile have exceeded all expectations, with more than 12,000 units sold in the previous month alone. This remarkable figure represents a 40% increase over the same period last year.
            </p>
            <p>
              Henry Ford attributes this success to his company's revolutionary assembly line method, which has dramatically reduced production costs while maintaining quality standards. "Our aim is to produce motorcars that the average American worker can afford," stated Ford in a recent interview.
            </p>
            <p>
              The popularity of these affordable motorcars is transforming American society, with rural families now able to travel to nearby towns and cities with unprecedented ease. Meanwhile, city dwellers increasingly venture into the countryside for weekend excursions.
            </p>
            <div className="newspaper-continued">Continued on Page B1, Column 2</div>
          </article>

          <article className="newspaper-article">
            <h3>STOCK MARKET REPORT</h3>
            <p>
              The exchange witnessed moderate activity yesterday with industrials showing strength. United States Steel advanced 2⅛ points, while American Tobacco declined ¾. Railroad securities remained largely unchanged amidst uncertainty regarding pending regulatory legislation.
            </p>
            <p>
              Gold continues firm at $20.67 per troy ounce. Sterling exchange rate: $4.86.
            </p>
          </article>

          <article className="newspaper-article">
            <h3>NEW BANKING REGULATIONS PROPOSED</h3>
            <p>
              Senator Aldrich yesterday introduced legislation aimed at reforming the nation's banking system. The proposed measures would establish a central banking authority to better coordinate currency supply and prevent financial panics such as that experienced in 1907.
            </p>
            <p>
              Leading financiers have expressed cautious support for the measure, though some rural representatives remain skeptical, fearing excessive concentration of financial power in Eastern institutions.
            </p>
            <p>
              "Our aim is to create a more resilient and responsive financial system that serves the needs of commerce while maintaining stability," the Senator explained to reporters following the bill's introduction.
            </p>
            <div className="newspaper-continued">Continued on Page B2, Column 3</div>
          </article>

          <article className="newspaper-article advertisement">
            <h3 className="advert-heading">NATIONAL TRUST BANK</h3>
            <p className="advert-text">
              SECURITY FOR YOUR SAVINGS
            </p>
            <p>
              3% Interest on Deposits<br />
              Modern Safe Deposit Boxes<br />
              Mortgage Loans at Favorable Rates<br />
            </p>
            <p className="advert-footer">
              MEMBER OF FEDERAL RESERVE SYSTEM
            </p>
          </article>
        </div>
      </>
    ),
    "SPORTS": (
      <>
        <div className="newspaper-headline">
          <h2>BASEBALL SEASON OPENS WITH RECORD ATTENDANCE</h2>
          <div className="newspaper-headline-details">
            New York Giants Triumph Over Brooklyn in Thrilling Contest
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              The national pastime returned in grand fashion yesterday as the baseball season commenced with enthusiasm and pageantry across the country. At the Polo Grounds, where an estimated 28,000 spectators gathered despite overcast conditions, the New York Giants secured a hard-fought victory over their Brooklyn rivals by a score of 3-2.
            </p>
            <p>
              Christy Mathewson, the Giants' celebrated hurler, demonstrated his continued mastery on the mound, allowing just five hits while striking out seven Brooklyn batsmen. The decisive run came in the eighth inning when Captain Larry Doyle drove a line drive into right field, scoring Fred Merkle from second base.
            </p>
            <p>
              "The boys showed exceptional form for so early in the season," remarked Giants manager John McGraw. "If we maintain this level of play, I'm confident in our pennant prospects."
            </p>
            <div className="newspaper-continued">Continued on Page S1, Column 1</div>
          </article>

          <article className="newspaper-article">
            <h3>OLYMPIC PREPARATIONS ADVANCE IN SWEDEN</h3>
            <p>
              Officials in Stockholm report that construction of facilities for next year's Olympic Games proceeds on schedule. The main stadium, with capacity for 22,000 spectators, is nearly complete, along with venues for swimming, gymnastics, and other competitions.
            </p>
            <p>
              American athletic officials have begun selection trials for what promises to be the largest team yet sent to the international event. Particular hopes rest upon our track and field competitors, who dominated at the London Games four years ago.
            </p>
            <p>
              "American sporting prowess will be well-represented in Sweden," declared James Sullivan, secretary of the Amateur Athletic Union. "Our athletes are training vigorously for this opportunity to bring honor to our nation."
            </p>
            <div className="newspaper-continued">Continued on Page S2, Column 4</div>
          </article>

          <article className="newspaper-article">
            <h3>BOXING CHAMPIONSHIP BOUT SCHEDULED</h3>
            <p>
              Heavyweight champion Jack Johnson will defend his title against Jim Jeffries in what promoters are calling "The Fight of the Century," scheduled for July 4th in Reno, Nevada. Interest in the contest has reached unprecedented levels, with thousands expected to travel west for the spectacle.
            </p>
            <p>
              Jeffries, who retired undefeated six years ago, has been training intensively at his California camp. Recent reports suggest he has regained much of the formidable conditioning that once made him the sport's most feared competitor.
            </p>
            <p>
              Johnson, meanwhile, continues to train in Chicago, expressing confidence in his abilities. "I respect Mr. Jeffries' accomplishments," the champion stated, "but the outcome is not in doubt."
            </p>
            <div className="newspaper-continued">Continued on Page S3, Column 2</div>
          </article>
        </div>
      </>
    ),
    "SOCIETY": (
      <>
        <div className="newspaper-headline">
          <h2>VANDERBILT BALL DAZZLES HIGH SOCIETY</h2>
          <div className="newspaper-headline-details">
            Elaborate Costumes and Décor Transform Fifth Avenue Mansion
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              Mrs. Cornelius Vanderbilt III hosted what society observers unanimously declare to be the most spectacular gathering of the season last evening. The theme, "Versailles in the Age of Louis XV," was executed with extraordinary attention to historical detail, transforming the Vanderbilt mansion into a reasonable facsimile of the French royal palace.
            </p>
            <p>
              Guests, numbering approximately four hundred of the city's most prominent families, arrived in meticulously crafted period costumes. Mrs. Astor appeared as Marie Antoinette in a gown reportedly valued at $12,000, adorned with authentic eighteenth-century lace and family jewels, while Mr. J.P. Morgan cut an impressive figure as Cardinal Richelieu.
            </p>
            <p>
              The evening featured authentic French cuisine prepared by chefs brought expressly from Paris for the occasion, along with musical performances by members of the Metropolitan Opera Company.
            </p>
            <div className="newspaper-continued">Continued on Page E1, Column 3</div>
          </article>

          <article className="newspaper-article">
            <h3>WEDDING ANNOUNCEMENT: HARRINGTON—WINTHROP</h3>
            <p>
              Mr. and Mrs. George Harrington of Boston announce the engagement of their daughter, Miss Eleanor Harrington, to Mr. Frederick Winthrop, son of Colonel and Mrs. Robert Winthrop of New York. Miss Harrington was presented to society two seasons ago and has since been among the most admired young ladies in Boston's social circles.
            </p>
            <p>
              Mr. Winthrop graduated from Harvard University in 1907 and now serves as vice president of the Winthrop Banking Corporation. The wedding is scheduled for June at Trinity Church, with a reception to follow at the Somerset Club.
            </p>
          </article>

          <article className="newspaper-article">
            <h3>NEWPORT SEASON PREPARATIONS BEGIN</h3>
            <p>
              Servants and contractors were observed yesterday preparing several prominent summer "cottages" along Bellevue Avenue for the upcoming Newport season. The Breakers, summer residence of Mrs. Cornelius Vanderbilt II, appears to be undergoing minor renovations to its grand ballroom.
            </p>
            <p>
              Social secretaries report that the season promises to be particularly active, with at least twelve major balls planned, along with the usual yacht races, tennis tournaments, and polo matches that define summer among the elite.
            </p>
            <p>
              Mrs. Stuyvesant Fish has reportedly planned a series of unconventional entertainments that society watchers anticipate with particular curiosity, given her reputation for imaginative and sometimes surprising diversions.
            </p>
            <div className="newspaper-continued">Continued on Page E2, Column 1</div>
          </article>

          <article className="newspaper-article advertisement">
            <h3 className="advert-heading">TIFFANY & CO.</h3>
            <p className="advert-text">
              FINEST JEWELRY AND SILVERWARE
            </p>
            <p>
              Wedding Gifts of Distinction<br />
              Diamond Engagement Rings<br />
              Custom Designs Upon Request<br />
            </p>
            <p className="advert-footer">
              FIFTH AVENUE AT 37TH STREET
            </p>
          </article>
        </div>
      </>
    ),
    "ARTS": (
      <>
        <div className="newspaper-headline">
          <h2>METROPOLITAN OPERA ANNOUNCES AMBITIOUS NEW SEASON</h2>
          <div className="newspaper-headline-details">
            Caruso to Star in Three New Productions
          </div>
        </div>

        <div className="newspaper-columns-3">
          <article className="newspaper-article">
            <p className="newspaper-dropcap">
              The Metropolitan Opera has unveiled plans for its most ambitious season to date, featuring twenty-two different operas including four American premieres. Enrico Caruso, the incomparable Italian tenor, will headline three new productions, including the first American performance of Puccini's "La Fanciulla del West," which the composer has written specifically with the Met in mind.
            </p>
            <p>
              "We continue our commitment to presenting both beloved classics and innovative new works," stated Metropolitan Opera general manager Giulio Gatti-Casazza. "The American premieres represent our belief that opera remains a vital, evolving art form rather than merely a museum of past achievements."
            </p>
            <p>
              Subscription seats are already reported to be selling at unprecedented rates, with the performances featuring Mr. Caruso almost entirely subscribed. Individual tickets go on sale next month.
            </p>
            <div className="newspaper-continued">Continued on Page F1, Column 2</div>
          </article>

          <article className="newspaper-article">
            <h3>CONTROVERSIAL PAINTING EXHIBITION DRAWS CROWDS</h3>
            <p>
              The display of works by several modern European painters at Stieglitz's 291 Gallery continues to attract both visitors and heated debate. The paintings, representing the so-called "Post-Impressionist" movement, feature distorted forms and unnatural colors that challenge conventional artistic standards.
            </p>
            <p>
              "These works represent nothing less than the future direction of serious art," asserted Mr. Stieglitz, the exhibition's organizer. "They express inner truths rather than merely reproducing external appearances."
            </p>
            <p>
              Many established critics have responded with skepticism or outright dismissal, with the Tribune's veteran art correspondent describing the exhibition as "the products of mental imbalance rather than artistic vision." Nevertheless, attendance has been substantial, suggesting public curiosity about these radical departures from tradition.
            </p>
            <div className="newspaper-continued">Continued on Page F3, Column 1</div>
          </article>

          <article className="newspaper-article">
            <h3>NEW RAGTIME COMPOSITIONS GAIN POPULARITY</h3>
            <p>
              The syncopated musical style known as "ragtime" continues to gain popularity across the nation, with sheet music sales for such compositions reaching unprecedented levels. Mr. Scott Joplin's latest work, "Solace - A Mexican Serenade," has proven particularly successful, demonstrating the composer's continuing evolution within the form he has done so much to define.
            </p>
            <p>
              Critics remain divided on the musical merits of ragtime, with traditional commentators dismissing it as a vulgar fad, while younger music enthusiasts praise its rhythmic innovation and distinctively American character.
            </p>
            <p>
              "This music represents the first truly American contribution to musical composition," contends Professor Harold Schmidt of Cincinnati Conservatory. "It draws upon multiple traditions to create something entirely new and vital."
            </p>
            <div className="newspaper-continued">Continued on Page F4, Column 3</div>
          </article>

          <article className="newspaper-article advertisement">
            <h3 className="advert-heading">STEINWAY & SONS</h3>
            <p className="advert-text">
              PIANOS OF UNPARALLELED QUALITY
            </p>
            <p>
              Grand and Upright Models<br />
              Used by Concert Masters Worldwide<br />
              Elegant Designs for Distinguished Homes<br />
            </p>
            <p className="advert-footer">
              DEMONSTRATIONS AT OUR SHOWROOM DAILY
            </p>
          </article>
        </div>
      </>
    )
  };

  return (
    <main>
      <div className="newspaper-header">
        <div className="newspaper-date">
          MAY 1, 1910 • MORNING EDITION • FIVE CENTS
        </div>
        <h1>THE DAILY CHRONICLE</h1>
        <div className="newspaper-subheading">
        &quot;ALL THE NEWS THAT&apos;S FIT TO PRINT&quot;
        </div>
        <div className="newspaper-volume">
          VOL. XXII — NO. 6,423
        </div>
      </div>

      <div className="newspaper-navigation">
        {Object.keys(newsContent).map((section) => (
          <div 
            key={section} 
            className={`newspaper-nav-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
            style={{ cursor: 'pointer' }}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Display content based on selected section */}
      {newsContent[activeSection]}

      <div className="newspaper-footer">
        <p>THE DAILY CHRONICLE • ESTABLISHED 1888 • PRICE: FIVE CENTS</p>
      </div>
    </main>
  );
}
