import React from 'react';
import './index.css';
import EventsForm from '../../components/eventsForm';
import EventsTable from '../../components/eventsTable';

class Events extends React.Component {
  constructor() {
    super();

    this.state = {
      events : [],
    }
  }

  getEvents = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;

    // setup the url
    const URL = `https://event-sched-backend-og.herokuapp.com/api/retrieve`;

    // perform a fetch with headers
    fetch(URL, {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'day': day,
        'month': month,
        'year': year,
      }
    })
    .then(res => res.json())
    .then(data => {
      // check if events exists, if not alert user
      if (data.events) {
        // setup events variable
        let events = data.events;

        // first sort by month
        events.sort(function(a, b) {
          return a.month - b.month
        });

        // sort by day
        events.sort(function(a, b) {
          return a.day - b.day
        });

        // store the events into the state
        this.setState({ events });
      } else {
        alert(`${data.message}`);
      }
    })
    .catch(err => alert(err));
  }

  deleteEvent = async(id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }

    // setup the url
    const URL = `https://event-sched-backend-og.herokuapp.com/api/delete`;

    // perform a fetch with headers
    fetch(URL, {
      'method': 'DELETE',
      'headers': {
        'Content-Type': 'application/json',
        'event_id': id
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.code == 200) {
        // remove from local state
        let events = this.state.events;

        let results = events.filter(event => event.event_id != id);

        this.setState({ events : results });
      }

      alert(`${data.message}`);
    })
    .catch(err => alert(err));
  }

  render() {
    return (
      <div className="Events">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Get Events</h1>
            <EventsForm getEvents={this.getEvents} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <EventsTable
              deleteEvent={this.deleteEvent}
              events={this.state.events}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
