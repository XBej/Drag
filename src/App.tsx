import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import RedeemGiftCode from './components/RedeemGiftCode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/redeem" component={RedeemGiftCode} />
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </Router>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
      />
    </AuthProvider>
  );
};

export default App;

