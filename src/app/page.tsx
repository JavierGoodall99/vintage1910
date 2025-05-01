import TelegramChat from './components/TelegramChat';

export default function Home() {
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
        <div className="newspaper-nav-item">LOCAL NEWS</div>
        <div className="newspaper-nav-item">INTERNATIONAL</div>
        <div className="newspaper-nav-item">BUSINESS</div>
        <div className="newspaper-nav-item">SPORTS</div>
        <div className="newspaper-nav-item">SOCIETY</div>
        <div className="newspaper-nav-item">ARTS</div>
      </div>

      <section className="telegram-section">
        <h2 className="section-title">TELEGRAPHIC COMMUNICATION STATION</h2>
        <TelegramChat />
      </section>

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
          &quot;The air becomes exceedingly thin at such heights,&apos; reported Paulhan after his descent. &quot;One must be prepared for the demands such conditions place upon both machine and pilot.&quot;
          </p>
          <p>
            Aviation experts suggest this achievement opens new possibilities for the future of air travel, potentially allowing for more efficient long-distance journeys by taking advantage of more favorable wind conditions at higher altitudes.
          </p>
          <div className="newspaper-continued">Continued on Page A2, Column 4</div>
        </article>

        <article className="newspaper-article">
          <h3>MOTORCAR SALES REACH UNPRECEDENTED HEIGHTS</h3>
          <p>
            The Ford Motor Company announced yesterday that sales of their Model T automobile have exceeded all expectations, with more than 12,000 units sold in the previous month alone. This remarkable figure represents a 40% increase over the same period last year.
          </p>
          <p>
            Henry Ford attributes this success to his company&apos;s revolutionary assembly line method, which has dramatically reduced production costs while maintaining quality standards. &quot;Our aim is to produce motorcars that the average American worker can afford,&quot; stated Ford in a recent interview.
          </p>
          <p>
            The popularity of these affordable motorcars is transforming American society, with rural families now able to travel to nearby towns and cities with unprecedented ease. Meanwhile, city dwellers increasingly venture into the countryside for weekend excursions.
          </p>
          <div className="newspaper-continued">Continued on Page B1, Column 2</div>
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
          <h3>WEATHER FORECAST</h3>
          <p>
            Fair weather is expected today with moderate temperatures ranging from 55 to 68 degrees Fahrenheit. Light easterly winds becoming southerly in the afternoon. Chance of precipitation: 10%.
          </p>
          <p>
            Tomorrow: Increasing cloudiness with a possibility of scattered showers by evening. Temperature remaining steady.
          </p>
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

      <div className="newspaper-footer">
        <p>THE DAILY CHRONICLE • ESTABLISHED 1888 • PRICE: FIVE CENTS</p>
      </div>
    </main>
  );
}
