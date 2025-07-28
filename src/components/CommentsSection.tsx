import React from 'react';
import { Box, Typography, Avatar, IconButton, InputBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';

interface CommentsSectionProps {
  comments: string[];
  visible: boolean;
  userProfile: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments, visible, userProfile }) => {
  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '60%',
        bgcolor: '#121212',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          py: 1.5,
          position: 'relative',
        }}
      >
        <Typography color="#fff" fontSize={14} fontWeight={600}>
          Comments
        </Typography>
        <IconButton
          sx={{ color: '#fff', position: 'absolute', right: 3 }}
          aria-label="Send comment"
          size="small"
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Comments List */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: 2,
          py: 1,
        }}
      >
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Box key={index} sx={{ display: 'flex', mb: 1.5, alignItems: 'flex-start' }}>
              <Avatar
                sx={{ width: 32, height: 32, mr: 1.5, mt: 1 }}
                alt={`User ${index + 1}`}
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
              />
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography
                      component="span"
                      color="#fff"
                      fontSize={11}
                      fontWeight={600}
                      mr={1}
                    >
                      Username
                    </Typography>
                    <Typography component="span" color="#aaa" fontSize={10}>
                      Now
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    sx={{ color: '#fff', p: 0, pt: 1 }}
                    aria-label="Like comment"
                  >
                    <FavoriteBorderIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Box>
                <Typography color="#fff" fontSize={12} mt={0.5}>
                  {comment}
                </Typography>
                <Typography
                  color="#aaa"
                  fontSize={10}
                  mt={0.5}
                  sx={{ cursor: 'pointer', userSelect: 'none' }}
                  aria-label="Reply to comment"
                >
                  Reply
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography color="#aaa" fontSize={12} textAlign="center" mt={2}>
            No comments yet
          </Typography>
        )}
      </Box>

      {/* Comment Input */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          p: 1,
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Avatar
          sx={{ width: 24, height: 24, mr: 1 }}
          alt="Current User"
          src={userProfile}
        />
        <InputBase
          placeholder="Add a comment"
          sx={{
            flex: 1,
            color: '#fff',
            fontSize: 12,
            input: {
              p: 0.5,
            },
            '::placeholder': {
              color: '#aaa',
              opacity: 1,
            },
          }}
          inputProps={{ 'aria-label': 'Add a comment input' }}
        />
      </Box>

      {/* Cylinder handle */}
      <Box
        sx={{
          width: 80,
          height: 8,
          bgcolor: '#333',
          borderRadius: 8,
          position: 'absolute',
          bottom: 9,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: 0.7,
          userSelect: 'none',
        }}
      />
    </Box>
  );
};

export default CommentsSection;
