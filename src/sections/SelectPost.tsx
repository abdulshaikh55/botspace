import React, { useState } from 'react'
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import postThumbnails from '../data/thumbnails';

interface SelectPostProps {
  onImageSelect?: (imageInfo: typeof postThumbnails[0]) => void;
}

const SelectPost = ({ onImageSelect }: SelectPostProps) => {
  const [selectedValue, setSelectedValue] = useState('specific');
  const [selectedImage, setSelectedImage] = useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleThumbnailSelect = (id: string) => {
    setSelectedImage(id);
    const selectedImageInfo = postThumbnails.find(img => img.id === id) || postThumbnails[0];
    if (onImageSelect) {
      onImageSelect(selectedImageInfo);
    }
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant='h5' fontWeight={600} color="text.primary">When someone comments on</Typography>

      <RadioGroup
        aria-label="comment-options"
        name="comment-options-group"
        value={selectedValue}
        onChange={handleChange}
        sx={{ width: '100%' }}
      >

        <FormControlLabel
          value="specific"
          control={<Radio size="small" />}
          label={
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="body1" color="text.primary">a specific post or reel</Typography>
              {selectedValue === 'specific' && (
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap', gap: 1, mt: 1
                }}>
                  {postThumbnails.map((img) => (
                    <Box
                      key={img.id}
                      component="img"
                      src={img.src}
                      alt={`Post thumbnail ${img.id}`}
                      onClick={() => handleThumbnailSelect(img.id)}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '4px',
                        objectFit: 'cover',
                        border: img.id === selectedImage ? '2px solid' : '1px solid',
                        borderColor: img.id === selectedImage ? 'primary.main' : 'divider',
                        cursor: 'pointer',
                        transition: 'border 0.2s',
                      }}
                    />
                  ))}
                  <Button
                    variant="text"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      mt: 1,
                    }}
                  >
                    Show All
                  </Button>
                </Box>
              )}
            </Box>
          }
          sx={{
            alignItems: 'flex-start',
            width: '100%',
          }}
        />

        <FormControlLabel
          value="any"
          control={<Radio size="small" />}
          label={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flex: 1,
              }}>
              <Typography variant="body1" color="text.primary" >any post or reel</Typography>
              <Typography variant="caption" sx={{ bgcolor: 'info.main', color: 'white', px: 1, borderRadius: '4px' }}>PRO</Typography>
            </Box>
          }
          sx={{
            width: '100%',
            '& .MuiFormControlLabel-label': {
              width: '100%',
              display: 'flex',
            },
          }}
        />

        {/* Option 3: Next post or reel */}
        <FormControlLabel
          value="next"
          control={<Radio size="small" />}
          label={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flex: 1,
              }}>
              <Typography variant="body1" color="text.primary">next post or reel</Typography>
              <Typography variant="caption" sx={{ bgcolor: 'info.main', color: 'white', px: 1, borderRadius: '4px' }}>PRO</Typography>
            </Box>
          }
          sx={{
            width: '100%',
            '& .MuiFormControlLabel-label': {
              width: '100%',
              display: 'flex',
            },
          }}
        />
      </RadioGroup>
    </Box>
  )
}

export default SelectPost