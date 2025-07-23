import { useState, useEffect } from 'react';
import { Box, Typography, Switch, TextField, Button, Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface HandleDMProps {
  onFirstMessageChange: (message: string) => void;
  onLinkTextChange: (text: string) => void;
  onMainMessageChange: (mainMessage: string) => void;
}

const HandleDM = ({ onFirstMessageChange, onLinkTextChange, onMainMessageChange }: HandleDMProps) => {
  const [openingDM, setOpeningDM] = useState(true);
  const [openingMessage, setOpeningMessage] = useState(
    `Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨`
  );
  const [linkText, setLinktext] = useState('Send me the link');
  const [dmWithLink, setDmWithLink] = useState(false);
  const [linkMessage, setLinkMessage] = useState('');

  useEffect(() => {
    onFirstMessageChange(openingMessage);
  }, [openingMessage, onFirstMessageChange]);

  useEffect(() => {
    onLinkTextChange(linkText);
  }, [linkText, onLinkTextChange]);

  useEffect(() => {
    onMainMessageChange(linkMessage);
  }, [linkMessage, onMainMessageChange]);

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        They will get
      </Typography>

      {/* Opening DM Section */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 1,
        position: 'relative',
        zIndex: 1
      }}>
        <Typography variant="body1">an opening DM</Typography>
        <Switch
          checked={openingDM}
          onChange={(e) => setOpeningDM(e.target.checked)}
          color="primary"
          sx={{ zIndex: 2 }}
        />
      </Box>

      {openingDM && (
        <Box sx={{
          bgcolor: 'background.paper',
          borderRadius: 1,
          mb: 2
        }}>
          <TextField
            multiline
            fullWidth
            minRows={3}
            value={openingMessage}
            onChange={(e) => setOpeningMessage(e.target.value)}
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            minRows={1}
            value={linkText}
            onChange={(e) => setLinktext(e.target.value)}
            variant="outlined"
          />

          <Link
            href="#"
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
              color: 'primary.main',
              fontSize: '0.875rem'
            }}
          >
            Why does an Opening DM matter?
          </Link>
        </Box>
      )}

      {/* DM with Link Section - Critical Area for the Issue */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: 1,
        position: 'relative',
        zIndex: 1

      }}>
        <Typography variant="body1">a DM with the link</Typography>
        <Switch
          checked={dmWithLink}
          onChange={(e) => {
            setDmWithLink(e.target.checked);
          }}
          color="primary"
          sx={{
            cursor: 'pointer',
            zIndex: 2
          }}
        />
      </Box>

      {dmWithLink && (
        <Box sx={{
          bgcolor: 'background.paper',
          borderRadius: 1,
          mb: 1
        }}>
          <TextField
            multiline
            fullWidth
            minRows={3}
            placeholder="Write a message"
            value={linkMessage}
            onChange={(e) => setLinkMessage(e.target.value)}
            variant="outlined"
            sx={{ mb: 1 }}
          />

          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            fullWidth
            sx={{ mt: 1 }}
          >
            Add A Link
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'block',
              mt: 1,
              textAlign: 'center'
            }}
          >
            Create the DM you'd like to send
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default HandleDM;