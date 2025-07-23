import React from 'react';
import { Box, Typography, IconButton, InputBase, Avatar, Button } from '@mui/material'; // Import Button
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageIcon from '@mui/icons-material/Image';
import ImageAspectRatioSharpIcon from '@mui/icons-material/ImageAspectRatioSharp';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';

interface DMPageProps {
  visible: boolean;
  userProfile: string;
  openingMessage: string;
  linkText: string;
  mainMessage: string;
}

const DMPage: React.FC<DMPageProps> = ({ visible, userProfile, openingMessage, linkText, mainMessage }) => {
  if (!visible) return null;

  const dmSenderAvatar = userProfile; // Re-using userProfile for botspacehq's avatar
  const dmSenderName = "botspacehq";

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        bgcolor: '#121212',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* cylinder */}
      <Box
        sx={{
          width: 60,
          height: 8,
          bgcolor: '#333',
          borderRadius: 8,
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: 0.7,
        }}
      />


      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          pt: 1,
          pb: 0.3,
          mt: 3,
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >

        <Box sx={{ display: 'inherit', alignItems: 'center' }}>
          <IconButton size='small' sx={{ color: "#fff", pr: 0 }}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}><Avatar src={dmSenderAvatar} sx={{ width: 22, height: 22 }} /> </IconButton>
          <Typography
            sx={{
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {dmSenderName}
          </Typography>
        </Box>
        <Box sx={{ mr: 1.7 }}>
          <IconButton sx={{ color: '#fff', pr: 0 }}>
            <LocalPhoneRoundedIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff', pr: 0 }}>
            <VideocamRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Messages / Comments List */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: 1.5,
          py: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        {/* First Message (from botspacehq) */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <Avatar src={dmSenderAvatar} sx={{ width: 24, height: 24, flexShrink: 0 }} />
          <Box
            sx={{
              bgcolor: '#262626',
              borderRadius: '16px',
              borderTopLeftRadius: '4px',
              p: 1.2,
              maxWidth: '75%',
              wordBreak: 'break-word',
            }}
          >
            <Typography variant="body2" sx={{ color: '#fff', fontSize: 13, mb: 1 }}>
              {openingMessage}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#333333',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '10px',
                px: 4,
                py: 0.3,
                '&:hover': {
                  bgcolor: '#444444',
                },
              }}
            >
              {linkText}
            </Button>
          </Box>
        </Box>

        {/* User's Message (right-aligned) */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 0.5 }}>
          <Box
            sx={{
              bgcolor: '#8b4dff',
              borderRadius: '16px',
              borderTopRightRadius: '4px',
              p: 1.2,
              maxWidth: '75%',
              wordBreak: 'break-word',
            }}
          >
            <Typography variant="body2" sx={{ color: '#fff', fontSize: 13 }}>
              {linkText}
            </Typography>
          </Box>
        </Box>

        {/* Action Button (from botspacehq - "Send me the link") */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <Avatar src={dmSenderAvatar} sx={{ width: 24, height: 24, flexShrink: 0 }} />
          <Box
            sx={{
              bgcolor: '#262626',
              borderRadius: '16px',
              borderTopLeftRadius: '4px',
              p: 1.2,
              maxWidth: '75%',
              wordBreak: 'break-word',
            }}
          >
            <Typography variant="body2" sx={{ color: '#fff', fontSize: 13 }}>
              {mainMessage}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Comment Input */}
      <Box
        sx={{
          borderRadius: 5,
          bgcolor: '#1d1d1d',
          p: 1,
          mx: 1,
          display: 'flex',
          alignItems: 'center',
          mb: 1
        }}
      >
        <IconButton color='primary' size='small'><CameraAltIcon fontSize='small' /></IconButton>
        <InputBase
          placeholder="Message..."
          sx={{
            flex: 1,
            color: '#fff',
            fontSize: 12,
            '& input': {
              p: 0.5,
            },
            '&::placeholder': {
              color: '#aaa',
              opacity: 1,
            },
          }}
        />
        <IconButton sx={{ color: '#fff' }} size='small'><ImageIcon fontSize='small' /></IconButton>
        <IconButton sx={{ color: '#fff' }} size='small'><ImageAspectRatioSharpIcon fontSize='small' /></IconButton>
        <IconButton sx={{ color: '#fff' }} size='small'><AddCircleOutlineRoundedIcon fontSize='small' /></IconButton>
      </Box>
    </Box >
  );
};

export default DMPage;