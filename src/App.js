
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBarTravel from './components/Shared/NavBarTravel/NavBarTravel';
import Login from './components/Admin/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingForm from './components/ManageBooking/BookingForm/BookingForm';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBarTravel></NavBarTravel>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/booking-form/:id">
                <BookingForm></BookingForm>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
