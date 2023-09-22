import { useState } from "react";

function BookingForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [availableTimes, setAvailableTimes] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Confirmed!")
    clearForm();
  }

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setDate("");
    setAvailableTimes("");
    setGuests("");
    setOccasion("");
  }

  return ( 
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p className="form-header">Reserve a Table</p>

        <label htmlFor="name">First Name</label>
        <input value={firstname} type='text' name="name" id="name"required onChange={e => setFirstname(e.target.value)} placeholder="First Name"/> 

        <label htmlFor="name">Last Name</label>
        <input value={lastname} type='text' name="name" id="name"required onChange={e => setLastname(e.target.value)} placeholder="Last Name"/> 

        <label htmlFor="email">Email</label>
        <input value={email} type='text' name="email" id="email"required onChange={e => setEmail(e.target.value)} placeholder="email"/> 

        <label htmlFor="res-date">Choose date</label>
        <input value={date} type="date" id="res-date" required onChange={e => setDate(e.target.value)}/>

        <label htmlFor="res-time">Choose time</label>
        <select value={availableTimes} id="res-time" required onChange={e => setAvailableTimes(e.target.value)}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input value={guests} type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)}/>

        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} id="occasion" onChange={e => setOccasion(e.target.value)}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>

        <button className="form-button" type="submit">Submit</button>
    </form>
    </div>
    );
}

export default BookingForm;