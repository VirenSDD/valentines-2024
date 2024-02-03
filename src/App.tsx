import React from 'react';
import Timeline from './Timeline';

const events = [
  { date: 'February 14, 2020', title: 'Our First Date', description: 'Memorable details about our first date.' },
  { date: 'May 3, 2020', title: 'Weekend Getaway', description: 'Enjoyed a special weekend together.' },
  // Add more events as needed
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Our Love Timeline</h1>
      <Timeline events={events} />
    </div>
  );
};

export default App;
