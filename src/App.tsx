import { Container } from '@mui/material';
import Sidebar from './sections/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CodePage from './CodePage';
import Box from '@mui/material/Box';

const validPaths = [
  '/',
  '/star',
  '/home',
  '/profile',
  '/comments',
  '/send',
  '/settings',
  '/help',
  '/code'
];

function App() {
  return (
    <Router>
      <Container
        sx={{ height: '100vh', display: 'flex', p: 0, maxWidth: '100vw!important' }}
        disableGutters
      >
        <Sidebar />
        <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Routes>
            {validPaths.map((path) => (
              <Route key={path} path={path} element={<CodePage />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
