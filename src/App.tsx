import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Dashboard from './pages/dashboard';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
