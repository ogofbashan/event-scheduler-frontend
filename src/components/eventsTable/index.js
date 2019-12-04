import React from 'react';
import './index.css';
import EventsTableItem from '../eventsTableItem';

function EventsTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th colSpan="2">Notes</th>
          <th>Delete Event</th>
        </tr>
      </thead>

      <tbody>
        {
          props.events &&
            props.events.map( event =>
              <EventsTableItem
                event={event}
                key={event.event_id}
                deleteEvent={props.deleteEvent}
              />
            )
        }
      </tbody>
    </table>
  );
}

export default EventsTable;
