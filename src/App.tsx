import { Container } from '@mui/material';
import Sidebar from './sections/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import CodePage from './CodePage';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <Container sx={{ height: '100vh', display: 'flex', p: 0, maxWidth: '100vw!important' }} disableGutters>
        <Sidebar />
        <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/star" element={<ComingSoon />} />
            <Route path="/home" element={<ComingSoon />} />
            <Route path="/profile" element={<ComingSoon />} />
            <Route path="/comments" element={<ComingSoon />} />
            <Route path="/send" element={<ComingSoon />} />
            <Route path="/settings" element={<ComingSoon />} />
            <Route path="/help" element={<ComingSoon />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
