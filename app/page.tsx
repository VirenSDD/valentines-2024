// pages/index.tsx
import React from 'react';
import Timeline from '../components/timeline';
import events from './events';
import AddEventForm from '../components/addEvent';

interface Event {
  date: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };


  const eventsWithFormattedDates = events.map((event: Event) => ({
    ...event,
    formattedDate: formatDate(event.date),
  }));

  return (
    <div>
      <h1>Línea temporal Carla y Viren</h1>
      <br></br>
      <Timeline events={eventsWithFormattedDates} />
      {/* <AddEventForm /> */}
    </div>
  );
};

export default Home;
