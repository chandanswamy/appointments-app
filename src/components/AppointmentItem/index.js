// Write your code here
import 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const {appointmentDetails, toggleIsFavourite} = props
  const {id, title, date, isFavourite} = appointmentDetails
  const favImageUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const formatedDate = new Date(date)
  const appointDate = formatedDate.getDate()
  const appointDay = days[formatedDate.getDay()]
  const appointMonth = months[formatedDate.getMonth()]
  const appointYear = formatedDate.getFullYear()

  const onClickStar = () => {
    toggleIsFavourite(id)
  }

  return (
    <>
      <li className="appointment-item">
        <div className="appointment-card">
          <div className="top-section">
            <p className="title">{title}</p>
            <button
              data-testid="star"
              type="button"
              className="star-button"
              onClick={onClickStar}
            >
              <img src={favImageUrl} alt="star" />
            </button>
          </div>
          <p className="appointment-date">
            Date:{' '}
            {`${appointDate} ${appointMonth} ${appointYear}, ${appointDay}`}
          </p>
        </div>
      </li>
    </>
  )
}

export default AppointmentItem
