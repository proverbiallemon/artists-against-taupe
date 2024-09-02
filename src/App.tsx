import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import WhatWeStandFor from './components/WhatWeStandFor';
import OurColorfulCredo from './components/OurColorfulCredo';
import Revolutionaries from './components/Revolutionaries';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import AdminDashboard from './components/AdminDashboard';

const ProtectedRoute = ({ children }) => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  if (authStatus !== 'authenticated') {
    return <Navigate to="/" replace />;
  }
  return children;
};

const HomePage = () => (
  <>
    <WhatWeStandFor />
    <OurColorfulCredo />
    <Revolutionaries />
    <Partners />
    <ContactForm />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;