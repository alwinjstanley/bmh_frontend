import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentForm from './components/AppointmentForm';
import Layout from './components/Layout';
import HealthNews from './components/HealthNews';
import Login from './components/Login';
import Prescriptions from './components/Prescriptions';
import Bills from './components/Bills';
import PaymentSuccess from './components/PaymentSuccess';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="about/" element={<About/>} />
        <Route path="departments/" element={<Departments/>} />
        <Route path="doctors/" element={<Doctors/>} />
        <Route path="form/" element={<AppointmentForm/>} />
        <Route path='news/' element={<HealthNews/>} />
        <Route path='login/' element={<Login/>} />
        <Route path='prescription/' element={<Prescriptions/>} />
        <Route path="bills" element={<Bills />} />
        <Route path="payment-success" element={<PaymentSuccess/>} />    
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>  
      </Layout>
    </div>
  );
}

export default App;
