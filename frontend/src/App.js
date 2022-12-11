import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './_components/PrivateRoute';
import Activate from './_pages/Activate';
import Board from './_pages/Board';
import BoardDetail from './_pages/BoardDetail';
import CreateProject from './_pages/CreateProject';
import CreateTicket from './_pages/CreateTicket';
import Dashboard from './_pages/Dashboard';
import EditTicket from './_pages/EditTicket';
import Login from './_pages/Login';
import MyWork from './_pages/MyWork';
import ProjectDetail from './_pages/ProjectDetail';
import ProjectList from './_pages/ProjectList';
import Register from './_pages/Register';
import TicketDetail from './_pages/TicketDetail';
import TicketList from './_pages/TicketList';
import YourWork from './_pages/YourWork';
import Footer from './_views/Footer';
import Header from './_views/Header';
import ActiveBoard from './_pages/ActiveBoard';
import Home from './_pages/Home';
import CreateBoard from './_pages/CreateBoard';
import EditBoard from './_pages/EditBoard';


function App() {
  return (
       <div id="layout-wrapper">
            <Router>
                    <Header />
                    <Routes>
                         <Route path="/" extact element={<Home />}  />
                         <Route path="*" element={<Home />}  />
                         <Route path="/register" element={<Register />}  />
                         <Route path="/activate/:token" element={<Activate />}  />
                         <Route path="/login" element={<Login />}  />
                         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}  />
                         <Route path="/project/create" element={<PrivateRoute><CreateProject /></PrivateRoute>}  />
                         <Route path="/project" element={<PrivateRoute><ProjectList /></PrivateRoute>}  />
                         <Route path="/project/:id" element={<PrivateRoute><ProjectDetail /></PrivateRoute>}  />
                         <Route path="/ticket/create" element={<PrivateRoute><CreateTicket /></PrivateRoute>}  />
                         <Route path="/ticket" element={<PrivateRoute><TicketList /></PrivateRoute>}  />
                         <Route path="/ticket/:id" element={<PrivateRoute><TicketDetail /></PrivateRoute>}  />
                         <Route path="/ticket/edit/:id" element={<PrivateRoute><EditTicket /></PrivateRoute>}  />
                         <Route path="/assign-issue" element={<PrivateRoute><YourWork /></PrivateRoute>}  />
                         <Route path="/my-issue" element={<PrivateRoute><MyWork /></PrivateRoute>}  />
                         <Route path="/board" element={<PrivateRoute><Board /></PrivateRoute>}  />
                         <Route path="/board/create" element={<PrivateRoute><CreateBoard /></PrivateRoute>}  />
                         <Route path="/board/:id" element={<PrivateRoute><BoardDetail /></PrivateRoute>}  />
                         <Route path="/board/edit/:id" element={<PrivateRoute><EditBoard /></PrivateRoute>}  />
                         <Route path="/active-board" element={<PrivateRoute><ActiveBoard /></PrivateRoute>}  /> 
                    </Routes> 
            </Router> 
       </div>
  );
}

export default App;
