import React from 'react';
import './index.css';

function EventsTableItem(props) {
  return (
    <tr>
      <td>{props.event.title}</td>
      <td>{props.event.month}/{props.event.day}/{props.event.year}</td>
      <td colSpan="2">{props.event.notes}</td>
      <td>
        <button
          onClick={() => props.deleteEvent(props.event.event_id)}
          className="btn btn-danger"
        >
          Delete Event
        </button>
      </td>
    </tr>
  );
}

export default EventsTableItem;
