import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Mobile from './components/Mobile';
import postThumbnails from './data/thumbnails';
import SelectPost from './sections/SelectPost';
import HandleComments from './sections/HandleComments';
import HandleDM from './sections/HandleDM';

type Section = 'Post' | 'Comments' | 'DM';

const CodePage = () => {
  const [currentSection, setCurrentSection] = useState<Section>('Post');
  const [selectedImageInfo, setSelectedImageInfo] = useState(postThumbnails[0]);
  const [commentArray, setCommentArray] = useState<string[]>([]);
  const [goLive, setGoLive] = useState(false);

  // HandleDM states
  const [firstMessage, setFirstMessage] = useState(`Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨`);
  const [linkText, setLinkText] = useState('Send me the link');
  const [mainMessage, setMainMessage] = useState('');

  const sections: Section[] = ['Post', 'Comments', 'DM'];

  const goToNextSection = () => {
    if (currentSection === 'Post') setCurrentSection('Comments');
    else if (currentSection === 'Comments') setCurrentSection('DM');
    else if (currentSection === 'DM') setGoLive(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh', width: '100vw', bgcolor: 'background.default' }}>
      <Box sx={{
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
        height: { md: '100vh', xs: 'auto' },
      }}>
        <SelectPost onImageSelect={setSelectedImageInfo} />

        {currentSection === 'Post' && (
          <Button
            variant="contained"
            onClick={goToNextSection}
            sx={{ mt: 3, alignSelf: 'flex-start', px: 3, py: 1, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
          >
            Next
          </Button>
        )}

        {currentSection === 'Comments' && (
          <>
            <HandleComments onSpecificWordsChange={setCommentArray} />
            <Button
              variant="contained"
              onClick={goToNextSection}
              sx={{ mt: 3, alignSelf: 'flex-start', px: 3, py: 1, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
            >
              Next
            </Button>
          </>
        )}

        {currentSection === 'DM' && (
          <>
            <HandleDM
              onFirstMessageChange={setFirstMessage}
              onLinkTextChange={setLinkText}
              onMainMessageChange={setMainMessage}
            />
            <Button
              variant="contained"
              onClick={goToNextSection}
              sx={{ mt: 3, alignSelf: 'flex-start', px: 3, py: 1, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
            >
              Next
            </Button>
          </>
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
            bgcolor: goLive ? 'primary.main' : 'grey.500',
            '&:hover': {
              bgcolor: goLive ? 'primary.dark' : 'red.700',
            },
          }}
        >
          Go Live
        </Button>

        <Mobile
          {...selectedImageInfo}
          commentsList={commentArray}
          showDM={currentSection === 'DM'}
          firstDMMessage={firstMessage}
          linkButtonDMText={linkText}
          mainDMMessage={mainMessage}
        />

        {/* Section Descriptor */}
        <Box sx={{
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
        }}>
          {sections.map((section) => (
            <Typography
              key={section}
              variant="body2"
              fontWeight={currentSection === section ? 600 : 400}
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                py: 0.5,
                px: 1,
                borderRadius: '16px',
                bgcolor: currentSection === section ? 'background.paper' : 'transparent',
                color: currentSection === section ? 'text.primary' : 'text.secondary',
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >
              {section}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CodePage;
