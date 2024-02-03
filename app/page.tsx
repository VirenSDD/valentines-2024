// pages/index.tsx
import React from 'react';
import Timeline from '../components/timeline';
import events from './events';

const Home: React.FC = () => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const eventsWithFormattedDates = events.map((event) => ({
    ...event,
    formattedDate: formatDate(event.date),
  }));

  return (
    <div>
      <h1>Línea temporal Carla y Viren</h1>
      <br></br>
      <Timeline events={eventsWithFormattedDates} />
    </div>
  );
};

export default Home;
