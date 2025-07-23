import { Box, Typography } from '@mui/material';

const ComingSoon = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Typography variant="h4" gutterBottom>
            Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
            This feature is not available yet. Please check back later!
        </Typography>
    </Box>
);

export default ComingSoon;