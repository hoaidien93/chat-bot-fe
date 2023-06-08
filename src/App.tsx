import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { MainLayout } from './layout/main';
import { HelpPage } from './pages/help';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpPage/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
