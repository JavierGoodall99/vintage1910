'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './WeatherBarometer.module.css';

// Mock weather data for demonstration
const mockWeatherData = {
  location: 'London, England',
  forecasts: [
    {
      date: new Date(2025, 4, 1),
      condition: 'Sunny',
      temperature: 72,
      pressure: 1020,
      humidity: 45,
      description: 'Clear skies with abundant sunshine all day.'
    },
    {
      date: new Date(2025, 4, 2),
      condition: 'Overcast',
      temperature: 68,
      pressure: 1008,
      humidity: 65,
      description: 'Grey clouds overhead with possibility of afternoon showers.'
    },
    {
      date: new Date(2025, 4, 3),
      condition: 'Rainy',
      temperature: 64,
      pressure: 1003,
      humidity: 80,
      description: 'Persistent rainfall throughout the day.'
    },
    {
      date: new Date(2025, 4, 4),
      condition: 'Foggy',
      temperature: 63,
      pressure: 1010,
      humidity: 90,
      description: 'Dense morning fog, clearing by midday.'
    },
    {
      date: new Date(2025, 4, 5),
      condition: 'Fair',
      temperature: 70,
      pressure: 1015,
      humidity: 55,
      description: 'Pleasant day with scattered clouds.'
    },
    {
      date: new Date(2025, 4, 6),
      condition: 'Windy',
      temperature: 66,
      pressure: 1005,
      humidity: 50,
      description: 'Strong gusts from the north throughout the day.'
    },
    {
      date: new Date(2025, 4, 7),
      condition: 'Stormy',
      temperature: 61,
      pressure: 998,
      humidity: 85,
      description: 'Thunderstorms expected in the afternoon and evening.'
    }
  ]
};

// Weather condition to dial position mapping
const conditionToDegrees = {
  'Stormy': 320,
  'Rainy': 280,
  'Foggy': 240,
  'Windy': 200,
  'Overcast': 160,
  'Fair': 100,
  'Sunny': 40
};

const WeatherBarometer = () => {
  const [needleRotation, setNeedleRotation] = useState(40);
  const [isRotating, setIsRotating] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 4, 1));
  const [currentForecast, setCurrentForecast] = useState(mockWeatherData.forecasts[0]);
  
  const dialRef = useRef(null);
  const steamRef = useRef(null);

  // Format date for display in calendar
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short'
    });
  };
  
  // Handle selecting a forecast from calendar
  const handleDateSelect = (date: Date) => {
    setTextOpacity(0);
    setIsRotating(true);
    
    // Find the forecast for selected date
    const forecast = mockWeatherData.forecasts.find(
      f => f.date.toDateString() === date.toDateString()
    );
    
    if (forecast) {
      setSelectedDate(date);
      
      // Animate the needle movement
      setTimeout(() => {
        const newRotation = conditionToDegrees[forecast.condition as keyof typeof conditionToDegrees];
        setNeedleRotation(newRotation);
        
        // Show animated steam if temperature is high
        if (forecast.temperature > 70) {
          setTimeout(() => {
            setShowSteam(true);
            setTimeout(() => setShowSteam(false), 3000);
          }, 500);
        }
        
        // Fade in text after needle stops moving
        setTimeout(() => {
          setCurrentForecast(forecast);
          setTextOpacity(1);
          setIsRotating(false);
        }, 1500);
      }, 300);
    }
  };

  // Render calendar dates
  const renderCalendarDays = () => {
    return mockWeatherData.forecasts.map((forecast) => {
      const isSelected = selectedDate.toDateString() === forecast.date.toDateString();
      
      return (
        <div 
          key={forecast.date.toDateString()}
          className={`${styles.calendarDay} ${isSelected ? styles.selected : ''}`}
          onClick={() => handleDateSelect(forecast.date)}
        >
          <span>{formatDate(forecast.date)}</span>
        </div>
      );
    });
  };

  // On component mount, set initial position
  useEffect(() => {
    handleDateSelect(selectedDate);
  }, []);

  // Calculate needle pressure rotation based on current pressure (independent of weather condition)
  const calculatePressureRotation = () => {
    // Map pressure range (990-1020 hPa) to rotation (0-270 degrees)
    const minPressure = 990;
    const maxPressure = 1025;
    const pressure = currentForecast.pressure;
    const rotationDegrees = ((pressure - minPressure) / (maxPressure - minPressure)) * 300;
    return rotationDegrees;
  };

  return (
    <div className={styles.barometerContainer} role="region" aria-label="Atmospheric Prognosticator">
      <div className={styles.barometerTitle}>
        <span className={styles.smallCaps}>The Royal Meteorological Bureau</span>
        <h2>Atmospheric Prognosticator</h2>
      </div>
      
      <div className={styles.barometerFrame}>
        <div className={styles.barometerGlass}>
          <div className={styles.barometerFaceContainer}>
            <div className={styles.barometerFace}>
              {/* Brass outer ring with tick marks */}
              <div className={styles.brassOuterRim}>
                <div className={styles.tickMarksRing}>
                  {Array.from({ length: 72 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${styles.tickMark} ${i % 6 === 0 ? styles.majorTick : ''}`}
                      style={{ transform: `rotate(${i * 5}deg)` }}
                    />
                  ))}
                </div>
                
                {/* Steam module for high temperatures */}
                <div 
                  className={`${styles.steamContainer} ${showSteam ? styles.active : ''}`}
                  ref={steamRef}
                >
                  <div className={styles.steam} style={{ animationDelay: '0s' }} />
                  <div className={styles.steam} style={{ animationDelay: '0.2s' }} />
                  <div className={styles.steam} style={{ animationDelay: '0.4s' }} />
                </div>
                
                {/* Weather dial with conditions */}
                <div className={styles.dialContainer} ref={dialRef}>
                  {/* Weather condition labels */}
                  <div className={styles.weatherLabels}>
                    <div 
                      className={styles.weatherLabel} 
                      style={{ transform: 'rotate(40deg) translateY(-82px)' }}
                    >
                      Sunny
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(100deg) translateY(-82px)' }}
                    >
                      Fair
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(160deg) translateY(-82px)' }}
                    >
                      Overcast
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(200deg) translateY(-82px)' }}
                    >
                      Windy
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(240deg) translateY(-82px)' }}
                    >
                      Foggy
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(280deg) translateY(-82px)' }}
                    >
                      Rainy
                    </div>
                    <div 
                      className={styles.weatherLabel}
                      style={{ transform: 'rotate(320deg) translateY(-82px)' }}
                    >
                      Stormy
                    </div>
                  </div>
                  
                  {/* Needle and pressure indicator */}
                  <div 
                    className={`${styles.needle} ${isRotating ? styles.rotating : ''}`}
                    style={{ transform: `rotate(${needleRotation}deg)` }}
                    aria-hidden="true"
                  >
                    <div className={styles.needleCenter} />
                  </div>
                  
                  <div 
                    className={`${styles.pressureNeedle}`}
                    style={{ transform: `rotate(${calculatePressureRotation()}deg)` }}
                    aria-hidden="true"
                  >
                    <div className={styles.pressureNeedleCenter} />
                  </div>
                  
                  {/* Data display panel */}
                  <div className={styles.enamelPanel}>
                    <div className={styles.dataItem}>
                      <div className={styles.dataLabel}>Thermal Index</div>
                      <div 
                        className={styles.dataValue}
                        style={{ opacity: textOpacity }}
                      >
                        {currentForecast.temperature}°F
                      </div>
                    </div>
                    
                    <div className={styles.dataItem}>
                      <div className={styles.dataLabel}>Barometric Tension</div>
                      <div 
                        className={styles.dataValue}
                        style={{ opacity: textOpacity }}
                      >
                        {currentForecast.pressure} hPa
                      </div>
                    </div>
                    
                    <div className={styles.dataItem}>
                      <div className={styles.dataLabel}>Vapor Saturation</div>
                      <div 
                        className={styles.dataValue}
                        style={{ opacity: textOpacity }}
                      >
                        {currentForecast.humidity}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Description paper ribbon */}
                  <div className={styles.paperRibbonContainer}>
                    <div className={styles.paperRibbonText} style={{ opacity: textOpacity }}>
                      {currentForecast.description}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`${styles.screw} ${styles.screwTopLeft}`}></div>
                  <div className={`${styles.screw} ${styles.screwTopRight}`}></div>
                  <div className={`${styles.screw} ${styles.screwBottomLeft}`}></div>
                  <div className={`${styles.screw} ${styles.screwBottomRight}`}></div>
                  <div className={styles.valveWheel}></div>
                  <div className={styles.temperatureTube}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar for forecast selection */}
      <div className={styles.calendarContainer}>
        <div className={styles.ledgerHeader}>Observation Dates</div>
        <div className={styles.calendarDays}>
          {renderCalendarDays()}
        </div>
      </div>
      
      <span className={styles.serialNumber}>Patent № 1842-B • London</span>
    </div>
  );
};

export default WeatherBarometer;