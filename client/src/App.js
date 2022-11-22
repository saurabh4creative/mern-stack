import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activate from './_pages/Activate';
import CreateProject from './_pages/CreateProject';
import CreateTicket from './_pages/CreateTicket';
import Dashboard from './_pages/Dashboard';
import Login from './_pages/Login';
import ProjectDetail from './_pages/ProjectDetail';
import ProjectList from './_pages/ProjectList';
import Register from './_pages/Register';
import TicketList from './_pages/TicketList';

function App() {
  return (
       <Router>
            <Routes>
                <Route path="/register" element={<Register />}  />
                <Route path="/activate/:token" element={<Activate />}  />
                <Route path="/login" element={<Login />}  />
                <Route path="/dashboard" element={<Dashboard />}  />
                <Route path="/project/create" element={<CreateProject />}  />
                <Route path="/project" element={<ProjectList />}  />
                <Route path="/project/:id" element={<ProjectDetail />}  />
                <Route path="/ticket/create" element={<CreateTicket />}  />
                <Route path="/ticket" element={<TicketList />}  />
            </Routes>
       </Router>
  );
}

export default App;
