import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className='flex min-h-screen'>
        <Sidebar />
        <main className='flex-1 p-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
