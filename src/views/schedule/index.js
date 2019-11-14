import React from 'react';
import './index.css';
import ScheduleForm from '../../components/scheduleForm';

class Schedule extends React.Component {
  saveEvent = async(e) => {
    e.preventDefault();

    //get info for proper variables
    let title=e.target.elements.title.value;
    let day=e.target.elements.day.value;
    let month=e.target.elements.month.value;
    let year=e.target.elements.year.value;
    let notes=e.target.elements.notes.value;

    //set up the url

    const URL = `https://event-sched-backend-og.herokuapp.com/api/save`;

    fetch(URL, {
      'method': 'POST',
      'headers': {
        'Content-type': 'applications/json',
        'title': title,
        'day' : day,
        'month' : month,
        'year' : year,
        'notes' : notes
      }
    })
    .then(res => res.json())
    .then(data => alert(`${data.message}`))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className= "row Schedule">
        <div className="col-md-6 offset-md-3">
          <h1>Schedule an Event</h1>
          <ScheduleForm saveEvent={ this.saveEvent } />
        </div>
      </div>
    );
  }
}
export default Schedule;
