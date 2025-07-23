import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Mobile from './components/Mobile'; // Assuming Mobile is in components
import postThumbnails from './data/thumbnails';
import SelectPost from './sections/SelectPost';
import HandleComments from './sections/HandleComments';
import HandleDM from './sections/HandleDM'; // Assuming HandleDM is in sections

const CodePage = () => {
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showDMSection, setShowDMSection] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState(postThumbnails[0]);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonPressed1, setButtonPressed1] = useState(false);
  const [commentArray, setCommentArray] = useState<string[]>([]);
  const [highlightedSection, setHighlightedSection] = useState('Post');
  const [goLive, setGoLive] = useState(false)

  // States to hold the values from HandleDM
  const [firstMessage, setFirstMessage] = useState(
    `Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨`
  );
  const [linkText, setLinkText] = useState('Send me the link'); // Renamed from textLink for clarity
  const [mainMessage, setMainMessage] = useState('');

  // Callbacks for HandleDM to update state in CodePage
  const handleFirstMessageChange = (message: string) => {
    setFirstMessage(message);
  };

  const handleLinkTextChange = (text: string) => {
    setLinkText(text);
  };

  const handleMainMessageChange = (message: string) => {
    setMainMessage(message);
  };

  const handleComments = () => {
    setShowCommentSection(true);
    setButtonPressed(true);
    setHighlightedSection('Comments');
  };

  const handleDMs = () => {
    setShowDMSection(true);
    setButtonPressed1(true);
    setHighlightedSection('DM');
  };

  const handleSpecificWordsUpdate = (words: string[]) => {
    setCommentArray(words);
  };

  const finalGoLive = () => {
    setGoLive(true);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh', width: '100vw', bgcolor: 'background.default' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          bgcolor: 'background.paper',
          width: { xs: '100%', sm: 300, md: 350, lg: 400 },
          flexDirection: 'column',
          p: 2,
          borderRight: { md: '1px solid', xs: 'none' },
          borderBottom: { xs: '1px solid', md: 'none' },
          borderColor: 'divider',
          minWidth: { md: '300px' },
          overflowY: 'auto',
          height: { md: '100vh', xs: 'auto' }
        }}
      >
        <SelectPost onImageSelect={setSelectedImageInfo} />

        <Button
          variant="contained"
          onClick={handleComments}
          sx={{
            mt: 3,
            alignSelf: 'flex-start',
            px: 3,
            py: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            display: buttonPressed ? 'none' : 'block'
          }}
        >
          Next
        </Button>

        {showCommentSection && (
          <Box>
            {/* Pass the update function to HandleComments */}
            <HandleComments onSpecificWordsChange={handleSpecificWordsUpdate} />
            <Button
              variant="contained"
              sx={{
                mt: 3,
                alignSelf: 'flex-start',
                px: 3,
                py: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                display: buttonPressed1 ? 'none' : 'block'
              }}
              onClick={() => { handleDMs() }}
            >
              Next
            </Button>
          </Box>
        )}

        {showDMSection && (
          <Box>
            {/* Pass the callback functions to HandleDM */}
            <HandleDM
              onFirstMessageChange={handleFirstMessageChange}
              onLinkTextChange={handleLinkTextChange}
              onMainMessageChange={handleMainMessageChange}
            />
            <Button
              variant="contained"
              sx={{
                mt: 3,
                alignSelf: 'flex-start',
                px: 3,
                py: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
              onClick={() => { finalGoLive() }}
            >
              Next
            </Button>
          </Box>

        )}


      </Box>

      {/* Right Panel - Mobile Preview */}
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        position: { md: 'fixed', xs: 'static' },
        right: { md: 0 },
        top: { md: 0 },
        height: { md: '100vh' },
        width: { md: `calc(100% - ${350}px)` },
        overflowY: 'hidden'
      }}>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            position: 'absolute',
            right: 23,
            top: 1,
            py: 1,
            bgcolor: goLive ? 'primary' : 'grey',
            '&:hover': {
              bgcolor: goLive ? 'primary.dark' : 'red',
            },
          }}
        >
          Go Live
        </Button>
        <Mobile
          {...selectedImageInfo}
          commentsList={commentArray}
          showDM={showDMSection}
          firstDMMessage={firstMessage}
          linkButtonDMText={linkText}
          mainDMMessage={mainMessage}
        />
        {/* section descriptor */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 0.5,
            bgcolor: '#EFEFEF',
            borderRadius: '20px',
            gap: 1,
            mt: 2,
            width: '200px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Post Typography */}
          <Typography
            variant="body2"
            fontWeight={highlightedSection === 'Post' ? 600 : 400}
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              py: 0.5,
              px: 1,
              borderRadius: '16px',
              bgcolor: highlightedSection === 'Post' ? 'background.paper' : 'transparent',
              color: highlightedSection === 'Post' ? 'text.primary' : 'text.secondary',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Post
          </Typography>

          {/* Comments Typography */}
          <Typography
            variant="body2"
            fontWeight={highlightedSection === 'Comments' ? 600 : 400}
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              py: 0.5,
              px: 1,
              borderRadius: '16px',
              bgcolor: highlightedSection === 'Comments' ? 'background.paper' : 'transparent',
              color: highlightedSection === 'Comments' ? 'text.primary' : 'text.secondary',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Comments
          </Typography>

          {/* DM Typography */}
          <Typography
            variant="body2"
            fontWeight={highlightedSection === 'DM' ? 600 : 400}
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              py: 0.5,
              px: 1,
              borderRadius: '16px',
              bgcolor: highlightedSection === 'DM' ? 'background.paper' : 'transparent',
              color: highlightedSection === 'DM' ? 'text.primary' : 'text.secondary',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            DM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CodePage;