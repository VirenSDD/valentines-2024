// components/Timeline.tsx
import React from 'react';
import '../styles/timeline.css'

interface TimelineEvent {
  formattedDate: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line"></div>
        <ul className="timeline">
          {events.map((event, index) => (
            <li key={index} className="timeline-event">
              <div className="timeline-event-date text-sm text-gray-600">{event.formattedDate}</div>
              <div className="timeline-event-content">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
