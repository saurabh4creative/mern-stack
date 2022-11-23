import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './_components/PrivateRoute';
import Activate from './_pages/Activate';
import CreateProject from './_pages/CreateProject';
import CreateTicket from './_pages/CreateTicket';
import Dashboard from './_pages/Dashboard';
import Login from './_pages/Login';
import MyWork from './_pages/MyWork';
import ProjectDetail from './_pages/ProjectDetail';
import ProjectList from './_pages/ProjectList';
import Register from './_pages/Register';
import TicketList from './_pages/TicketList';
import YourWork from './_pages/YourWork';
import Footer from './_views/Footer';
import Header from './_views/Header';

function App() {
  return (
       <div id="layout-wrapper">
            <Router>
                    <Header />
                         <Routes>
                              <Route path="/register" element={<Register />}  />
                              <Route path="/activate/:token" element={<Activate />}  />
                              <Route path="/login" element={<Login />}  />
                              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}  />
                              <Route path="/project/create" element={<PrivateRoute><CreateProject /></PrivateRoute>}  />
                              <Route path="/project" element={<PrivateRoute><ProjectList /></PrivateRoute>}  />
                              <Route path="/project/:id" element={<PrivateRoute><ProjectDetail /></PrivateRoute>}  />
                              <Route path="/ticket/create" element={<PrivateRoute><CreateTicket /></PrivateRoute>}  />
                              <Route path="/ticket" element={<PrivateRoute><TicketList /></PrivateRoute>}  />
                              <Route path="/your-work" element={<PrivateRoute><YourWork /></PrivateRoute>}  />
                              <Route path="/my-work" element={<PrivateRoute><MyWork /></PrivateRoute>}  />
                         </Routes>
                    <Footer/>
            </Router> 
       </div>
  );
}

export default App;
