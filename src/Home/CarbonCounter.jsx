import React, { useEffect, useState } from 'react';

const CarbonCounter = () => {
  const co2PerSecond = 1300;
  const creditsPerSecond = 16;
  const startDate = new Date('2025-01-01T00:00:00Z');

  const [co2Total, setCo2Total] = useState(0);
  const [creditTotal, setCreditTotal] = useState(0);

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();
      const secondsElapsed = Math.floor((now - startDate) / 1000);
      setCo2Total(secondsElapsed * co2PerSecond);
      setCreditTotal(secondsElapsed * creditsPerSecond);
    };

    updateCounters(); // Initial call
    const intervalId = setInterval(updateCounters, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h1>🌿 Real-Time Global Carbon Impact</h1>
      <div style={styles.subtitle}>Since January 1, 2025</div>

      <div style={styles.counterGrid}>
        <div style={{ ...styles.counterBox, ...styles.emissions }}>
          <div style={styles.label}>CO₂ Emissions</div>
          <div style={{ ...styles.value, color: '#d32f2f' }}>{co2Total.toLocaleString()}</div>
          <div style={styles.unit}>Metric tons emitted</div>
        </div>

        <div style={{ ...styles.counterBox, ...styles.credits }}>
          <div style={styles.label}>Carbon Credits Issued</div>
          <div style={{ ...styles.value, color: '#2e7d32' }}>{creditTotal.toLocaleString()}</div>
          <div style={styles.unit}>Metric tons offset</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: 'black',
    color: '#333',
    textAlign: 'center',
    padding: '50px',
    borderRadius:'20px'
  },
  subtitle: {
    fontSize: '2em',
    color: '#666',
    marginBottom: '40px',
  },
  counterGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  counterBox: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '30px',
    width: '320px',
  },
  label: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  value: {
    fontSize: '2.2em',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  unit: {
    fontSize: '0.9em',
    color: '#666',
  },
  emissions: {},
  credits: {},
};

export default CarbonCounter;
