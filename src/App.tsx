import { Container } from '@mui/material';
import Sidebar from './sections/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CodePage from './CodePage';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <Container sx={{ height: '100vh', display: 'flex', p: 0, maxWidth: '100vw!important' }} disableGutters>
        <Sidebar />
        <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<CodePage />} />
            <Route path="/star" element={<CodePage />} />
            <Route path="/home" element={<CodePage />} />
            <Route path="/profile" element={<CodePage />} />
            <Route path="/comments" element={<CodePage />} />
            <Route path="/send" element={<CodePage />} />
            <Route path="/settings" element={<CodePage />} />
            <Route path="/help" element={<CodePage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
