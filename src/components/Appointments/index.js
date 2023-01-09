// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const createAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavourite: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, createAppointment],
      title: '',
      date: '',
    }))
  }

  toggleIsFavourite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isFavourite: !eachAppointment.isFavourite}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="app-container">
        <div className="add-appointments">
          <h1 className="app-title">Add Appointment</h1>
          <div className="form-container">
            <form className="appointment-form" onSubmit={this.onAddAppointment}>
              <label>
                TITLE
                <input
                  value={title}
                  type="text"
                  placeholder="Title"
                  className="title-input"
                  onChange={this.onTitleChange}
                />
              </label>
              <label>
                DATE
                <input value={date} type="date" onChange={this.onDateChange} />
              </label>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <img
              className="appointments-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="section-two">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              className="starred-button"
              type="button"
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <div className="section-three">
            <ul className="appointments-list-container">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                  toggleIsFavourite={this.toggleIsFavourite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
