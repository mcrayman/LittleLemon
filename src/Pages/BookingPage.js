import BookingForm from "../Components/BookingForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function BookingPage() {
    return ( 
        <div>
            <Header />
            <div className="bookingform">
                <BookingForm />
            </div>
            <Footer />
        </div>
     );
}

export default BookingPage;