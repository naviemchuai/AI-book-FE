import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookShelves from './pages/BookShelves.js';
import ReadingPage from './pages/ReadingPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookShelves />} />
          <Route path="/read" element={<ReadingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;