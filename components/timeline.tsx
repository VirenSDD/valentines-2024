// components/Timeline.tsx
import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline-container">
      <ul className="timeline">
        {events.map((event, index) => (
          <li key={index} className="timeline-event">
            <div className="timeline-event-date text-sm text-gray-600">{event.date}</div>
            <div className="timeline-event-content">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
