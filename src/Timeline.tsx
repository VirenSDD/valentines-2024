// Install the necessary package:
// npm install react-vertical-timeline-component

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'; // Add your own CSS for styling

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
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          iconStyle={{ background: '#e86971', color: '#fff' }} // Customize the icon style
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p>{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
