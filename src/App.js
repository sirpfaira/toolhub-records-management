import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import NavigationBar from './pages/NavigationBar';
import RecordsDashboard from './pages/RecordsDashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='records-dashboard' element={<RecordsDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
