
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBarTravel from './components/Shared/NavBarTravel/NavBarTravel';
import Login from './components/Admin/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingForm from './components/ManageBooking/BookingForm/BookingForm';
import UserBookings from './components/UserControl/UserBookings/UserBookings';
import ManageBooking from './components/UserControl/ManageBooking/ManageBooking';
import AddNewPackage from './components/UserControl/AddNewPackage/AddNewPackage';
import Footer from './components/Shared/Footer/Footer';

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
            <PrivateRoute exact path="/user-booking">
                <UserBookings></UserBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/user-booking">
                
            </PrivateRoute>
            <PrivateRoute exact path="/manage-all-booking">
                <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/add-new-package">
                <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
