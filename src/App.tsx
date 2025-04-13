import User from './components/users/User';
import {
  TOKEN_USER_1,
  TOKEN_USER_2,
  TOKEN_USER_3,
  TOKEN_USER_4,
} from './constants/permissionsRole';
import ProtectedRoute from './layout/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simulated current user role
const currentUserRole = TOKEN_USER_3; // Change to test different roles

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
        <Route path="/*" element={<h1>404 Page Not Found</h1>} />

        {/* Protected Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute
              allowedRoles={[TOKEN_USER_1, TOKEN_USER_2]}
              userRole={currentUserRole}
            />
          }
        >
          <Route index element={<User />} />
        </Route>

        <Route
          path="/scholar"
          element={
            <ProtectedRoute
              allowedRoles={[TOKEN_USER_2]}
              userRole={currentUserRole}
            />
          }
        >
          <Route index element={<h1>Scholar Page</h1>} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              allowedRoles={[TOKEN_USER_3]}
              userRole={currentUserRole}
            />
          }
        >
          <Route index element={<h1>Admin Page</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
