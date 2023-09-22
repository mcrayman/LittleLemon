function BookingForm() {
    return ( 
       <div className="booking">
        <form> 
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date"/>
        </form>
       </div>
     );
}

export default BookingForm;