import { useState, useEffect } from 'react'; // Import useEffect
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
        pr: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 2
      }}>
        <Typography variant="body1">an opening DM</Typography>
        <Switch
          checked={openingDM}
          onChange={(e) => setOpeningDM(e.target.checked)}
          color="primary"
        />
      </Box>

      {openingDM && (
        <Box sx={{
          pr: 2,
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
          // You can also call the prop directly here if you prefer
          // onChange={(e) => {
          //   setOpeningMessage(e.target.value);
          //   onFirstMessageChange(e.target.value);
          // }}
          />
          <TextField
            fullWidth
            minRows={1}
            value={linkText}
            onChange={(e) => setLinktext(e.target.value)}
            variant="outlined"
          // You can also call the prop directly here if you prefer
          // onChange={(e) => {
          //   setLinktext(e.target.value);
          //   onLinkTextChange(e.target.value);
          // }}
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

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 2
      }}>
        <Typography variant="body1">a DM with the link</Typography>
        <Switch
          checked={dmWithLink}
          onChange={(e) => setDmWithLink(e.target.checked)}
          color="primary"
        />
      </Box>

      {dmWithLink && (
        <Box sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          mb: 2
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