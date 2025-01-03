import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  // State to manage events
  const [events, setEvents] = useState([
    { title: 'LinkedIn Post - Company A', date: '2024-10-05' },
    { title: 'Phone Call - Company B', date: '2024-10-06' },
    { title: 'Email - Company C', date: '2024-10-07' },
  ]);

  // Handler for adding new events
  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([
        ...events,
        { title: title, date: info.dateStr },
      ]);
    }
  };

  // Render the FullCalendar component
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">Calendar View</h1>
      <div className="mt-8">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick} // Allow adding events on date click
          editable={true} // Allow events to be dragged
          droppable={true} // Allow events to be dropped
        />
      </div>
    </div>
  );
};

export default Calendar;
