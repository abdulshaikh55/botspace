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
  const [linkText, setLinkText] = useState('Send me the link');
  const [dmWithLink, setDmWithLink] = useState(false);
  const [linkMessage, setLinkMessage] = useState('');

  // Sync all changes to parent callbacks in one effect
  useEffect(() => {
    onFirstMessageChange(openingMessage);
    onLinkTextChange(linkText);
    onMainMessageChange(linkMessage);
  }, [openingMessage, linkText, linkMessage, onFirstMessageChange, onLinkTextChange, onMainMessageChange]);

  // Clear related data when toggles are off to avoid stale data
  useEffect(() => {
    if (!openingDM) {
      setOpeningMessage('');
      setLinkText('Send me the link');
    }
  }, [openingDM]);

  useEffect(() => {
    if (!dmWithLink) {
      setLinkMessage('');
    }
  }, [dmWithLink]);

  // Example: Insert a placeholder link when "Add A Link" pressed
  const handleAddLink = () => {
    setLinkMessage((prev) => prev + (prev ? ' ' : '') + '[Your Link Here](http://)');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        They will get
      </Typography>

      {/* Opening DM Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
          mb: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="body1">an opening DM</Typography>
        <Switch
          checked={openingDM}
          onChange={(e) => setOpeningDM(e.target.checked)}
          color="primary"
          inputProps={{ 'aria-label': 'Toggle opening DM' }}
          sx={{ zIndex: 2 }}
        />
      </Box>

      {openingDM && (
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 1,
            mb: 2,
          }}
        >
          <TextField
            multiline
            fullWidth
            minRows={3}
            value={openingMessage}
            onChange={(e) => setOpeningMessage(e.target.value)}
            variant="outlined"
            sx={{ mb: 1 }}
            aria-label="Opening direct message"
          />
          <TextField
            fullWidth
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            variant="outlined"
            aria-label="Link button text"
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
              fontSize: '0.875rem',
            }}
          >
            Why does an Opening DM matter?
          </Link>
        </Box>
      )}

      {/* DM with Link Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
          position: 'relative',
          zIndex: 1,
          mb: 1,
        }}
      >
        <Typography variant="body1">a DM with the link</Typography>
        <Switch
          checked={dmWithLink}
          onChange={(e) => setDmWithLink(e.target.checked)}
          color="primary"
          inputProps={{ 'aria-label': 'Toggle DM with link' }}
          sx={{
            cursor: 'pointer',
            zIndex: 2,
          }}
        />
      </Box>

      {dmWithLink && (
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 1,
            mb: 1,
          }}
        >
          <TextField
            multiline
            fullWidth
            minRows={3}
            placeholder="Write a message"
            value={linkMessage}
            onChange={(e) => setLinkMessage(e.target.value)}
            variant="outlined"
            sx={{ mb: 1 }}
            aria-label="DM with link message"
          />

          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleAddLink}
          >
            Add A Link
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'block',
              mt: 1,
              textAlign: 'center',
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
