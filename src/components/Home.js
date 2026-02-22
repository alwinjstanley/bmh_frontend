import Hero from './Hero';
import Departments from './Departments';
import Doctors from './Doctors';
import About from './About';
import AppointmentForm from './AppointmentForm';
import PatientTestimonials from './PatientTestimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Departments />
      <Doctors />

      {/* Responsive About + Appointment Form */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <About />
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <AppointmentForm />
          </div>
        </div>
      </div>

      <PatientTestimonials />
    </div>
  );
};

export default Home;
