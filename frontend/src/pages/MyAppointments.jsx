import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { AppContext } from '../context/AppContext';
function MyAppointments() {

  const {doctors}=useContext(AppContext);
  return (
    <div>
      <p>My Appointments</p>

      <div>
        {doctors.slice(0,2).MyAppointments}
      </div>
    </div>
  )
}

export default MyAppointments
