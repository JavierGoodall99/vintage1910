import WeatherBarometer from '../../components/WeatherBarometer/WeatherBarometer';

export default function WeatheroscopePage() {
  return (
    <div className="journal-container">
      <header className="journal-header">
        <div className="journal-volume">Vol. XCIII • No. 17,542 • May 1, 2025</div>
        <h1>The Weatheroscope</h1>
        <div className="journal-subtitle">Meteorological Observations and Atmospheric Phenomena</div>
      </header>

      <main>
        <div className="section-title">
          <h2>Daily Weather Observations</h2>
          <p>Consult the barometer below for today&#39;s atmospheric conditions and forecasts for the week ahead.</p>
        </div>

        <WeatherBarometer />

        <div className="journal-article">
          <div className="journal-article-inner">
            <div className="journal-article-content-container">
              <h3>Understanding the Atmospheric Prognosticator</h3>
              <div className="journal-article-content journal-dropcap">
                <p>
                  The brass and glass barometer before you is a precision instrument for gauging atmospheric conditions. 
                  The main dial indicates the general weather pattern, ranging from sunny to stormy, while the thinner blue needle 
                  displays barometric pressure. Higher pressure (moving clockwise) generally indicates clearer weather, while 
                  falling pressure (counterclockwise) often foretells deteriorating conditions.
                </p>
                <p>
                  To examine forecasts for different days, simply select a date from the observation ledger below the 
                  instrument. The device&#39;s mechanisms will engage, rotating the needle to the appropriate indication.
                  Note that when particularly warm conditions are expected, the device may release steam from its 
                  pressure valve—an ingenious feature of this vintage apparatus.
                </p>
                <p>
                  The enamel data panel provides precise measurements of temperature (Thermal Index), pressure (Barometric Tension), 
                  and humidity (Vapor Saturation). Below this, a paper ribbon presents a textual description of the expected conditions.
                </p>
                <p>
                  This instrument is modeled after the original Fitzroy barometers of the 19th century, which 
                  revolutionized weather prediction and helped establish the science of meteorology as we know it today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="journal-footer">
        <div>Published by The Royal Meteorological Bureau • London • May 1, 2025</div>
      </footer>
    </div>
  );
}